require("dotenv").config();
const appJson = require("./app.json");
const ossPath = `http://serverless-platform.deepexi.top/applications/${appJson.appKey}`;
let publicPath = process.env.BUILD_TYPE === "production" ? ossPath : "/_nuxt/";
// console.log(process.env)
module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    publicPath,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      require("./.map.js").init(config);
      require("./.map.js").init(config);
      require("./.map.js").init(config);
      require("./.map.js").init(config);
      require("./.map.js").init(config);
    }
  }
};
