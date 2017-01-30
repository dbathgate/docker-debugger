var http = require('http');
var os = require('os');
var express = require('express');

var app = express();

app.get('/env', function(req, res) {
  var body = '';

  Object.keys(process.env).forEach(function (key) {
    body = body + key + "=" + process.env[key] + "\n";
  });

  res.end(body);
});

app.get('/hostname', function(req, res) {
  res.end(os.hostname() + '\n');
});

app.get('/interfaces', function(req, res) {
  var body = '';

  var ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      body = body + ifname + ": " + iface.address + "\n";
    });
  });

  res.end(body);
});

app.listen(18080);
