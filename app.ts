Bun.serve({
  fetch(req: Request) {
    const urlContent = new URL(req.url)
    const pathname = urlContent.pathname; 
    const method = req.method; 
    
    if (pathname === "/startGame") {
        console.log(req.method)
    }

    return new Response("coco")
  }
});
