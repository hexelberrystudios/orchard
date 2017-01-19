import vue from 'rollup-plugin-vue'
//import scss from 'rollup-plugin-scss'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
//import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'

// @TODO: Update documentation rollup-plugin-replace to clarify how it works
// @TODO: Update example project and provide clarifications for rollup-plugin-vue,
// because for some reason their example doesn't actually use rollup-plugin-vue, and the documentation
// makes no mention of how it's expected to work in context.
// @TODO: Update documentation for rollup-plugin-vue to make more sense.

const plugins = [
  // Documentation is really difficult to understand
  vue({ compileTemplate: true }),
  //scss(),
  // Buble is an ES2015 transpiler that focuses on only translating things that have a good equivalent in ES5
  buble({ exclude: 'node_modules/**' }),
  // This tries to find the right vue.js file to use for the occasion
  nodeResolve({ browser: true, jsnext: true }),
  // This converts commonjs modules into rollup modules
  commonjs(),
  // This replaces the string on the left with the string on the right,
  // which for some reason needs to be processed as ""production"".
  // I have to do this because for some reason, Vue.js has server variables in
  // their client side code and don't bother to set a default in case it's not available
  replace({
    'process.env.NODE_ENV': JSON.stringify( 'development' )
  })
]
/*
if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify())
}
*/
/*
if (process.env.NODE_ENV === 'development') {
  // updates the bundle as its elements get updated
  plugins.push(livereload())
  // Does something. Thanks for the documentation on that one, guys!
  plugins.push(serve({
    open: true
  }))
}
*/
export default {
  entry: 'views/components/app.js',
  dest: 'public/static/js/dist/build.js',
  sourceMap: true,
  plugins
}