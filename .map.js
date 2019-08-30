const path = require('path');
const { alias } = require('./meta.json');
const addAlias = function (config) {
    Object.keys(alias || {}).map(index => {
        config.resolve.alias[index] = path.resolve(__dirname, alias[index]);
    });
};
exports.init = function (config) {
    addAlias(config);
};
