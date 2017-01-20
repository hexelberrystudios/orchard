module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      var render = require('./render');
      
      render(function (html) {
        return reply(html);
      }, function (err) {
        // @TODO: Send error 500 page
        return reply(err);
      });
    }
  },
  {
    method: 'GET',
    path: '/home',
    handler: function (request, reply) {
      if (!request.params.layout) {
        return reply.view('home', null, { layout: 'partial_layout' });
      } else {
        return reply.view('home');
      }
    }
  },
  {
    method: 'GET',
    path: '/style-guide',
    handler: function (request, reply) {
      return reply.view('style-guide');
    }
  },
];