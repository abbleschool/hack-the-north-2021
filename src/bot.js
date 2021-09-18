require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client(); //creating an instance of class


client.login(process.env.DISCORDJS_BOT_TOKEN)//pass token to login
//use variable bc credentials security


//console.log(process.env.DISCORDJS_BOT_TOKEN);