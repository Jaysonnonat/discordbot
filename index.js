var Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
    console.log("Bot is ready");
    console.log(process.env.TOKEN);
});

client.login(process.env.TOKEN);