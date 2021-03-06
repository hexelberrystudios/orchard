var Hapi = require('hapi');
var hoodie = require('hoodie').register;
var routes = require('./controllers/routes');

// Define global Vue for server-side app.js
global.Vue = require('vue');

var server = new Hapi.Server();

server.connection({
  host: process.env.IP,
  port: process.env.PORT
});
/*
server.connection({
  host: 'localhost',
  port: 8000
});
*/
// setup routes
server.route(routes);

// setup views
server.register(require('vision'), function (error) {
  if (error) {
    throw error;
  }

  server.views({
    engines: {
      html: require('ejs')
    },
    relativeTo: __dirname,
    path: 'views',
    layoutPath: 'views',
    layout: 'layout',
    partialsPath: 'views/components'
  });
});

// setup serving static files
server.register(require('inert'), function (error) {
  if (error) {
    throw error;
  }

  server.route({
    method: 'GET',
    path: '/js/{file*}',
    handler: {
      directory: {
        path: 'public/static/js'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/css/{file*}',
    handler: {
      directory: {
        path: 'public/static/css'
      }
    }
  });
});

// setup hoodie/server
/* NOTE: options.path.public MUST be 'dist', and the 'dist' folder
   must exist in the root directory in order for this to work */
server.register({
  register: hoodie,
  options: { // pass options here
    inMemory: true,
    paths: {
      public: 'dist'
    }
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
