const { Telegraf } = require('telegraf');
const { handleSubscribe, handleWeather } = require('./commands');
require('dotenv').config({ path: 'config/config.env' });

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to the Weather Bot! Use /subscribe to get updates.'));
bot.command('subscribe', handleSubscribe);
bot.command('weather', handleWeather);
bot.launch()
  .then(() => console.log('Bot started!'))
  .catch((err) => console.error('Bot launch failed:', err));


    // Ensure this points to the correct path

