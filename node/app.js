// Import the built-in http module
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, World!" }));
});

// Set the server to listen on port 3000
server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
