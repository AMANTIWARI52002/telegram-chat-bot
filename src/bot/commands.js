const axios = require('axios');
const { saveUser } = require('./utils');

// Handle the subscription command
const handleSubscribe = async (ctx) => {
    const chatId = ctx.chat.id;
    try {
        await saveUser(chatId);  // Save the user to the database or list
        ctx.reply('You are subscribed to weather updates!');
    } catch (error) {
        console.error('Subscription error:', error);
        ctx.reply('Could not subscribe. Try again later.');
    }
};

// Handle the weather command
const handleWeather = async (ctx) => {
    const city = ctx.message.text.split(' ')[1] || 'London'; // Allow user to input city or default to London
    const apiKey = process.env.WEATHER_API_KEY;

    try {
        // Request weather data from OpenWeatherMap API with Celsius units
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const message = `Weather in ${data.name}: ${data.weather[0].description}, Temp: ${data.main.temp}°C`;
        ctx.reply(message);
    } catch (error) {
        console.error('Weather fetch error:', error);
        ctx.reply('Could not fetch weather data. Make sure the city name is correct and try again.');
    }
};

module.exports = { handleSubscribe, handleWeather };
