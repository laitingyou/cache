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
