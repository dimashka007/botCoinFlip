const TelegramBot = require('node-telegram-bot-api');
const token = '860433166:AAEikU7IfnMXnEfEWIS0b6vyWpIhvmXh724';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if((msg.text.toLowerCase() != 'орёл') && (msg.text.toLowerCase() != 'орел') && (msg.text.toLowerCase() != 'решка')){
  bot.sendMessage(chatId, 'либо ты дурак, либо не умеешь писать, в любом случае выбирай: орёл или решка');
  }
  else if(msg.text.toLowerCase() == 'орёл' || (msg.text.toLowerCase() == 'орел')){
    bot.sendMessage(chatId, 'Не угадал! Решка! Хуйца сосни. \nЕще раз сук');
  }
  else {
    bot.sendMessage(chatId, 'Не угадал! Орёл! Хуйца сосни. \nЕще раз сук');
  }
});