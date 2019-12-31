module.exports.about = {
  command: '/about',
  description: 'To inform the creator info',
  method: async context => {
    await context.sendText(
      'This line-bot created by 2pai-dev team (https://github.com/2pai-dev)'
    );
  },
};
