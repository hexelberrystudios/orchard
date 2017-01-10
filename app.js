var Hapi = require('hapi');
var hoodie = require('hoodie').register;
var routes = require('./controllers/routes');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.register(require('vision'), function (error) {
  if (error) {
    throw error;
  }

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views',
    layout: './layout',
    partialsPath: './views/partials'
  });
});

server.route(routes);

server.register({
  register: hoodie,
  options: { // pass options here
    inMemory: true,
    public: 'dist'
  }
}, function (error) {
  if (error) {
    throw error
  }

  server.start(function (error) {
    if (error) {
      throw error
    }

    console.log(('Server running at:', server.info.uri));
  });
});
