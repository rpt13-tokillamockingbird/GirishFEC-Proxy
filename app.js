const express = require("express");
const morgan = require("morgan");
const path = require("path");
const server = express();
const proxy = require("http-proxy-middleware");
const cors = require('cors');

const PORT = process.env.PORT || 3000;
server.use(cors())
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "public")));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// server.use('/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

server.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});