module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply.view('login');
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