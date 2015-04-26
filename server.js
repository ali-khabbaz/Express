var express = require('./server/requires.js').express,
	app = require('./server/requires.js').app,
	c = require('./server/requires.js').c,
	cluster = require('./server/requires.js').cluster,
	logger = require('./server/requires.js').logger,
	path = require('./server/requires.js').path,
	bodyParser = require('./server/requires.js').bodyParser,
	cookieParser = require('./server/requires.js').cookieParser,
	decode = require('./server/utilities.js').decode,
	//verify = require('./server/utilities.js').verify,
	numCPUs = require('./server/requires.js').numCPUs;


var PORT = 80;
c.connect({
	host: '127.0.0.1',
	user: 'root',
	password: 'bahbah',
	db: 'test_01'
});


if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	cluster.on('exit', function (worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {
	// Workers can share any TCP connection
	// In this case its a HTTP server
	app.set('views', __dirname + '/public/views');
	app.set('view engine', 'ejs');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	app.use(cookieParser());
	app.use(
		express.static(path.join(__dirname, '/public'))
	);



	var registerFunction = require('./server/apps/register.js').register;
	var login = require('./server/apps/login.js').login;
	var global = require('./server/apps/global.js').global;
	var pdfServe = require('./server/apps/pdfServe.js').pdfServe;
	var jobs = require('./server/apps/jobs.js').jobs;



	app.get(/.pdf/, pdfServe);
	app.post('/app/register', registerFunction);
	app.post('/app/login', login);
	app.post('/app/jobs', jobs);
	app.get('/', global);



	app.listen(PORT);
	console.log('listening on port', PORT);
}