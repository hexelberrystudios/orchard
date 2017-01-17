(function () {
  var hijackLinks = function () {
    var i;
    var links = document.getElementsByTagName('a');
    var doLinkRouting = function (e) {
      var href;
      e.preventDefault();

      console.log(e.currentTarget);
      href = e.currentTarget.getAttribute('href');

      route(href);
    };
    var setupLinkRouting = function (href) {
      route(href, function () {
        nanoajax.ajax({ url: href + '?layout=false' }, function (code, response) {
          console.log(response);
        });
      });
    };

    for (i = 0; i < links.length; i++) {
      setupLinkRouting(links[i].getAttribute('href'));
      links[i].addEventListener('click', doLinkRouting);
    }
  };

  var hijackFormSubmissions = function () {
    // @TODO
  };

  document.addEventListener('DOMContentLoaded', function (e) {
    route.start();
    hijackLinks();
    hijackFormSubmissions();
  });
})();