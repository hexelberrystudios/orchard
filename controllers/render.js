var render = function render (callback, errCallback) {
  var fs = require('fs');
  var path = require('path');
  console.log('Rendering...');
  // Get the HTML layout
  var layout = fs.readFileSync(path.resolve(__dirname, '../views/layout.html'), 'utf8');
  // Create a renderer
  var renderer = require('vue-server-renderer').createRenderer();
  //const filePath = path.resolve(__dirname, '../public/static/js/dist/build.js')
  //const code = fs.readFileSync(filePath, 'utf8');
  //const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);

  // Render our Vue app to a string
  //bundleRenderer.renderToString(
  renderer.renderToString(
    // Create an app instance
    require(path.resolve(__dirname, '../public/static/js/dist/build.js')).createApp(),
    // Handle the rendered result
    function (error, html) {
      console.log('Rendered');
      // If an error occurred while rendering...
      if (error) {
        // Log the error in the console
        console.log('Error:' + error);
        errCallback(error);
      } else {
        // Send the layout with the rendered app's HTML
        console.log('Responding...');
        console.log(html);
        callback(layout.replace('<!-- APP -->', html));
      }
    }
  )
};

module.exports = render;