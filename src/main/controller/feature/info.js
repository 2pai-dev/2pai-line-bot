module.exports.info = {
  command: '/info',
  description: 'To inform the creator info',
  method: async context => {
    await context.sendText(
      'This line-bot created by iqbal (https://github.com/2pai)'
    );
  },
};
