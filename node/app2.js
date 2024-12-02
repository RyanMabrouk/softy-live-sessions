const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // RESOURCE 1
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else if (req.url === "/greet") {
    // RESOURCE 2
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to your first Node.js app!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
