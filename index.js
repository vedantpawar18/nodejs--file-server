var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
    // var fs = require('fs');
    if (req.url=="/")
    {
        fs.readdir('./', function(err, files){
            files.forEach(function(file){
                res.write('<a href=\"' + file + '\">' + file + '<br>');
            });
        });
    }
    else 
        {
            let url=req.url;
            fs.readdir("./"+url, function(err, files){
                files.forEach(function(file){
                    res.write('<a href=\"' + file + '\">' + file + '<br>');
                });
            });
        }
    
}).listen(3010);