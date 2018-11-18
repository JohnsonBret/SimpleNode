var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true).query;
    console.log("Name: " + q.name + " Password: " + q.password);

    console.log("Requested URL: " + req.url);

    if (req.url == "/style.css") {
        fs.readFile('style.css', function(err, cssFile){
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(cssFile);
            res.end();
            
        });
    }
    else if(q.name == "Eli")
    {
        fs.readFile('welcome.html', function(err, welcomeData){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(welcomeData);
            res.end();
            
        });
    }
    else if(q.name = "Annabelle" && q.password == "secret")
    {
        fs.readFile('Annabelle.html', function(err, welcomeData){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(welcomeData);
            res.end();
            
        });
    }
    else if(q.name = "Sebastian" && q.password == "mario")
    {
        fs.readFile('sebastian.html', function(err, welcomeData){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(welcomeData);
            res.end();
            
        });
    }
    else if(q.name = "Austin" && q.password == "haha"){
        fs.readFile('austin.html', function(err, welcomeData){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(welcomeData);
            res.end();
            
        });
    }
    else
    {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    }
 


  

  console.log("Server started on 8080");
}).listen(8080);