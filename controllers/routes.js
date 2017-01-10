module.exports = [
  {
    method: 'GET',
    path: '/home',
    handler: function (request, reply) {
      return reply.view('home');
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply.view('login');
    }
  }
];