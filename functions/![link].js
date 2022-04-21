export async function onRequestGet(context) {
  let originUrl = (new URL(context.request.url)).origin;
  if (context.params !== undefined) {
    if (context.params.link !== undefined) {
      let req = context.params.link;
      let link = await context.env.SHORTURL.get(req);
      if (link) {
        return new Response.redirect(link, 301)
      }
      else {
        return new Response.redirect(originUrl, 301)
      }
    }
  }
  return new Response("ERROR NO SHORT LINK PROVIDED", null, 2);
}