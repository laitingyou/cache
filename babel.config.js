<<<<<<< HEAD
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/env", {modules: 'umd'} ]
  ];
  const plugins = [
    // "@babel/plugin-transform-runtime",
    // "@babel/runtime",
  ];

  return {
    presets,
    plugins,
  };
}
=======
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/env", {modules: 'umd'} ]
  ];
  const plugins = [
    // "@babel/plugin-transform-runtime",
    // "@babel/runtime",
  ];

  return {
    presets,
    plugins,
  };
}
>>>>>>> 6bfe6053d1ab5e3c4ccfd3d76811a2a19d95351d
