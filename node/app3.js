const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Check the request URL and method
  if (req.method === "GET" && req.url.startsWith("/users/")) {
    const userId = req.url.split("/")[2];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `User ID: ${userId}` }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
