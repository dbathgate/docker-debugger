var http = require('http');
var os = require('os');

var handleRequest = function(request, response) {
  response.writeHead(200);

  var body = "";

  body = body + "Environment Variables:\n\n";
  Object.keys(process.env).forEach(function (key) {
    body = body + key + "=" + process.env[key] + "\n";
  });

  body = body + "\n\nHost:\n\n";
  body = body + "Hostname: " + os.hostname() + "\n";

  body = body + "\n\nNetwork Interfaces:\n\n";

  var ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      body = body + ifname + ": " + iface.address + "\n";
    });
  });
  response.end(body);
}
var www = http.createServer(handleRequest);
www.listen(18080);
