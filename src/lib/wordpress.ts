// WordPress (WPGraphQL) client.
//
// Point WORDPRESS_GRAPHQL_URL (in .env) at your GraphQL endpoint, e.g.
//   WORDPRESS_GRAPHQL_URL=https://cms.udbhavdevelopers.com/graphql
//
// Requires the "WPGraphQL" plugin (https://www.wpgraphql.com/) active on the
// WordPress install. Featured images require WPGraphQL's default schema
// (no extra plugin needed for basic fields used here).

export type WPPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  categories: string[];
  author: string;
};

type RawWPPostNode = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: { node?: { sourceUrl?: string } } | null;
  categories?: { nodes?: { name: string }[] } | null;
  author?: { node?: { name?: string } } | null;
};

const ENDPOINT = import.meta.env.WORDPRESS_GRAPHQL_URL as string | undefined;

const POSTS_QUERY = /* GraphQL */ `
  query AllPosts($first: Int = 20) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;

function normalize(node: RawWPPostNode): WPPost {
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    date: node.date,
    excerpt: node.excerpt?.replace(/<[^>]+>/g, "").trim() ?? "",
    content: node.content ?? "",
    featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
    categories: node.categories?.nodes?.map((c) => c.name) ?? [],
    author: node.author?.node?.name ?? "Udbhav Developers",
  };
}

async function graphqlFetch<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
  if (!ENDPOINT) return null;
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) throw new Error(`WPGraphQL responded ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0]?.message ?? "GraphQL error");
    return json.data as T;
  } catch (err) {
    console.warn("[wordpress] falling back to sample posts —", (err as Error).message);
    return null;
  }
}

export async function getAllPosts(first = 20): Promise<WPPost[]> {
  const data = await graphqlFetch<{ posts: { nodes: RawWPPostNode[] } }>(POSTS_QUERY, { first });
  if (!data) return FALLBACK_POSTS;
  return data.posts.nodes.map(normalize);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await graphqlFetch<{ post: RawWPPostNode | null }>(POST_BY_SLUG_QUERY, { slug });
  if (!data) return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  if (!data.post) return null;
  return normalize(data.post);
}

// Used at build time when WORDPRESS_GRAPHQL_URL isn't configured yet, so the
// site (and `astro build`) still works out of the box during development.
export const FALLBACK_POSTS: WPPost[] = [
  {
    id: "1",
    slug: "the-evolution-of-vertical-luxury",
    title: "The Evolution of Vertical Luxury: Redefining High-Rise Living",
    date: "2024-10-24",
    excerpt:
      "As urban centres densify, the concept of a 'home in the sky' is undergoing a radical transformation. We explore how Udbhav Developers is integrating space, light, and material honesty into every high-rise plan.",
    content:
      "<p>As urban centres densify, the concept of a 'home in the sky' is undergoing a radical transformation.</p>",
    featuredImage: null,
    categories: ["Architecture"],
    author: "Udbhav Developers",
  },
  {
    id: "2",
    slug: "what-makes-an-apartment-future-ready",
    title: "What Makes an Apartment Future-Ready?",
    date: "2024-09-18",
    excerpt:
      "Beyond high-speed fibre and home automation, we look at modular spaces and adaptive structural designs that allow your home to grow with your lifestyle.",
    content: "<p>Beyond high-speed fibre and home automation, we look at modular spaces.</p>",
    featuredImage: null,
    categories: ["Architecture"],
    author: "Udbhav Developers",
  },
  {
    id: "3",
    slug: "understanding-uds-the-legal-backbone",
    title: "Understanding UDS: The Legal Backbone of Real Estate",
    date: "2024-08-30",
    excerpt:
      "A comprehensive deep-dive into Undivided Share of Land and why it's the most critical metric for long-term value appreciation.",
    content: "<p>A comprehensive deep-dive into Undivided Share of Land.</p>",
    featuredImage: null,
    categories: ["Guides", "Investment"],
    author: "Udbhav Developers",
  },
  {
    id: "4",
    slug: "safety-as-standard-next-gen-security",
    title: "Safety as Standard: Next-Gen Security Features",
    date: "2024-08-12",
    excerpt:
      "From 4-tier biometric access to AI-driven perimeter monitoring, discover how we protect what matters most.",
    content: "<p>From 4-tier biometric access to AI-driven perimeter monitoring.</p>",
    featuredImage: null,
    categories: ["Architecture"],
    author: "Udbhav Developers",
  },
  {
    id: "5",
    slug: "the-sky-garden-revolution",
    title: "The Sky Garden Revolution",
    date: "2024-07-15",
    excerpt:
      "How integrating nature into high-density developments improves resident wellbeing and indoor air quality.",
    content: "<p>How integrating nature into high-density developments improves resident wellbeing.</p>",
    featuredImage: null,
    categories: ["Sustainability"],
    author: "Udbhav Developers",
  },
];
