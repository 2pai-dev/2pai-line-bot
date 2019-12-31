const glob = require('glob');
const path = require('path');
const basePath = './src/main/controller/feature/';

const listModule = glob
  .sync(path.join(basePath, '*.js')) //will read all module path on feature dir
  .map(file => require('../../../' + file)); // load all module

const controllers = async (command, context) => {
  let found = false;
  listModule.map(async modul => {
    let methodName = Object.keys(modul)[0];
    if (modul[methodName].command == command) {
      // match the command with module
      found = true;
      await modul[methodName].method(context);
    }
  });
  if (!found) await context.sendText('command not found');
};
module.exports = controllers;
