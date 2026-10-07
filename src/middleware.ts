import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Enforce www. prefix for the domain
  if (url.hostname === "udbhavdevelopers.com") {
    url.hostname = "www.udbhavdevelopers.com";
    if (!url.pathname.endsWith("/")) {
      url.pathname = `${url.pathname}/`;
    }
    return context.redirect(url.toString(), 301);
  }

  return next();
});
