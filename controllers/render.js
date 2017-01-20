var render = function render (callback, errCallback) {
  var fs = require('fs');
  var path = require('path');
  console.log('Rendering...');
  // Get the HTML layout
  var layout = fs.readFileSync(path.resolve(__dirname, '../views/layout.html'), 'utf8');
  // Create a renderer
  var renderer = require('vue-server-renderer').createRenderer();
  // Render our Vue app to a string
  //console.log(require(path.resolve(__dirname, '../public/static/js/dist/build.js'))());
  renderer.renderToString(
    // Create an app instance
    require(path.resolve(__dirname, '../public/static/js/dist/build.js'))(),
    // Handle the rendered result
    function (error, html) {
      // If an error occurred while rendering...
      if (error) {
        // Log the error in the console
        errCallback(error);
      } else {
        // Send the layout with the rendered app's HTML
        console.log('Responding...');
        callback(layout.replace('<div id="app"></div>', html));
      }
    }
  )
};

module.exports = render;