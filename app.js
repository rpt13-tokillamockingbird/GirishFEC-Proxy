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

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// server.use('/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

server.use('/:id', express.static('public'));
server.use('/hundred/:id', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
server.use('/productInfo', proxy({ target: 'http://localhost:3003', changeOrigin: true }));
server.use('/productBuyerService/:id', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
server.use('/productQtyInfo', proxy({ target: 'http://localhost:3003', changeOrigin: true }));
server.use('/Priya/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));
server.use('/review/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

server.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});