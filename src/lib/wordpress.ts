// src/lib/wordpress.ts
const WP_BASE_URL = import.meta.env.PUBLIC_WP_BASE_URL || "https://udbhavdevelopers.com";
const WP_GRAPHQL_URL = `${WP_BASE_URL}/graphql`;

export interface Post {
	id: string;
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	featuredImage: string | null;
	categories: string[];
}

async function fetchGraphQL(query: string, variables = {}) {
	try {
		const res = await fetch(WP_GRAPHQL_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query, variables }),
		});
		if (!res.ok) return null;
		const json = await res.json();
		if (json.errors) return null;
		return json.data;
	} catch (err) {
		return null;
	}
}

export async function getAllPosts(): Promise<Post[]> {
	let allPosts: Post[] = [];
	let hasNextPage = true;
	let afterCursor = null;

	while (hasNextPage) {
		const query = `
			query AllPosts($first: Int!, $after: String) {
				posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
					pageInfo {
						hasNextPage
						endCursor
					}
					nodes {
						databaseId
						slug
						date
						title
						excerpt
						content
						author { node { name } }
						featuredImage { node { sourceUrl } }
						categories { nodes { name } }
					}
				}
			}
		`;

		const data = await fetchGraphQL(query, { first: 100, after: afterCursor });
		if (!data?.posts?.nodes) break;

		const nodes = data.posts.nodes.map((node: any) => ({
			id: String(node.databaseId),
			slug: node.slug,
			date: node.date,
			title: node.title,
			excerpt: stripHtml(node.excerpt),
			content: node.content,
			author: node.author?.node?.name || "Udbhav Developers",
			featuredImage: node.featuredImage?.node?.sourceUrl || null,
			categories: node.categories?.nodes?.map((cat: any) => cat.name) || [],
		}));

		allPosts = [...allPosts, ...nodes];
		hasNextPage = data.posts.pageInfo.hasNextPage;
		afterCursor = data.posts.pageInfo.endCursor;
	}

	return allPosts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	const allPosts = await getAllPosts();
	return allPosts.find(post => post.slug === slug) || null;
}

export function stripHtml(html: string): string {
	if (!html) return "";
	return html
		.replace(/<[^>]*>/g, " ")
		.replace(/&hellip;/g, "…")
		.replace(/&amp;/g, "&")
		.replace(/&#8217;|&#039;/g, "'")
		.replace(/&#8216;/g, "'")
		.replace(/&#8220;|&#8221;/g, '"')
		.replace(/&nbsp;/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export function estimateReadTime(html: string): string {
	if (!html) return "1 min read";
	const words = stripHtml(html).split(" ").filter(Boolean).length;
	const minutes = Math.max(1, Math.round(words / 200));
	return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
	if (!dateString) return "";
	return new Date(dateString).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}