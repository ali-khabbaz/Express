(function () {
	var express = require('express'),
		env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
		app = express(),
		q = require('q'),
		logger = require('morgan'),
		cookieParser = require('cookie-parser'),
		bodyParser = require('body-parser'),
		path = require('path'),
		cluster = require('cluster'),
		numCPUs = require('os').cpus().length,
		util = require('util'),
		Client = require('mariasql'),
		c = new Client();


	exports.app = app;
	exports.express = express;
	exports.q = q;
	exports.logger = logger;
	exports.cookieParser = cookieParser;
	exports.bodyParser = bodyParser;
	exports.path = path;
	exports.cluster = cluster;
	exports.numCPUs = numCPUs;
	exports.util = util;
	exports.c = c;

}());