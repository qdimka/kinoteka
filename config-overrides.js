module.exports = function override(config, env) {
    console.log({config,env});
    config.entry = './src/render/index.js';
    return config;
};