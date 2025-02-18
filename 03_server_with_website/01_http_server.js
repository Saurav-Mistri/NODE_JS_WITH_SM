const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> This is NODE JS with MR SM!</h1> <p>Hey, This is the way to create server.</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on port! ${port}`);
});
