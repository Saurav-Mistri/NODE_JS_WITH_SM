const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    if(req.url=='/'){
        res.statusCode = 200;
        res.end("<h1> This is NODE JS with MR SM!</h1> <p>Hey, This is the way to create server.</p>");
    }else if(req.url=='/about'){
        res.statusCode = 200;
        res.end("<h1> About NODE JS!</h1> <p> Hey, This is the Node JS website.</p>");
    }else{
        res.statusCode = 404;
        res.end("<h1> Oops! 404 Not Found!</h1> <p> Hey, This page is not found on this server!</p>");
    }
});

server.listen(port, () => {
  console.log(`Server is listening on port! ${port}`);
});

// time stamp: 1:23:00