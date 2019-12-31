const controllers = require('./controller');
const App = async context => {
  if (context.event.isText && context.event.text.includes('/', 0)) {
    const param = context.event.text.split(' ');
    await controllers(param[0], context);
  }
};

module.exports = App;
