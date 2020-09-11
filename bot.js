const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = { Discord, Client };

//include handlers
const msg = require('./handlers/msg.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  msg.onMsg(msg);
});

client.login('token');
