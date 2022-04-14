export async function onRequestPost(context) {

}

export async function onRequestGet(context) {
 // await context.env.CfUrlShortener.put('OwljL','https://drive.google.com/file/d/1rSv90taXFftWIN4Aeyqh5tDEheaNUCCK/view');
 let originUrl = (new URL(context.request.url)).origin;
    if (context.params !== undefined){
        if (context.params.link !== undefined){
            let req = context.params.link;
            let link = await context.env.CfUrlShortener.get(req);
            if (link) {
              return new Response(null, {
                headers: { Location: link },
                status: 301,
              });
            }
            else
            {
              return new Response(null, {
                headers: { Location: originUrl },
                status: 301,
              });
            }
            // console.log(`${context.env} ${req} ${link}`);
            // return new Response(JSON.stringify(link,null,2), {
            //     headers: {
            //       "content-type": "application/json;charset=UTF-8"
            //     }
            //   });
        }
    }
    return new Response("ERROR NO SHORT LINK PROVIDED",null,2);
    }