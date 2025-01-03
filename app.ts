import "@/core/load-data";

Bun.serve({
  fetch(req: Request, server) {
    const success = server.upgrade(req);
    
    if (success) {
      return undefined;
    }

    const urlContent = new URL(req.url);
    const pathname = urlContent.pathname;
    const method = req.method;

    if (pathname === "/startGame") {
      return new Response("Game started");
    }

    return new Response("Route not found", { status: 404 });
  },

  websocket: {
    async message(ws, message) {
      console.log(`Message reçu: ${message}`);
      ws.send(`Message envoyé au client`);
    },
  },
});