# orchard
Organizer tool

start:

npm run dev
node app.js

(Maybe) Edit
node_modules/vue/package.json
"main": "vue.common.js"
Because I don't want "vue.runtime.common.js" and I don't know how to change it.

@TODO: Client side routing
Issues could be:

1. In .vue, should be using module.exports instead of export default.
2. Using the wrong vue.js file. (vue.js vs /dist/vue.js).