

var Discord = require("discord.js");
var client = new Discord.Client();
var fs = require('fs');

client.on('ready', () => {
    console.log("Bot is ready");
    getUsers();
});

async function getUsers(){
    const j_guild = await client.guilds.fetch('850878886866321438');

    const j_guild_members = await j_guild.members.fetch();


    j_guild_members.forEach(xuser => {
        console.log(xuser.user.username);
        console.log(xuser.user.id);
    })


    getUser(222467949695467520,j_guild);

    return
  }

async function getUser(id, guild){

    const jaysom  = await guild.members.fetch(id);

    // console.log(jaysom)

    jaysom.forEach(xuser => {

      if(xuser.user.id == id){
        console.log(xuser.user.username);
        console.log(xuser.user.id);
      }
        
    })

    return
}

client.on('voiceStateUpdate', (oldState, newState) => {

  console.log("User changed");
    // check for bot
    if (oldState.member.user.bot) return;

    // the rest of your code
    var channelToConnet = newState.member.voice.channel;
    
    

    playChupapiMunanyo(channelToConnet);
    
    //channelToConnet.leave();
})

async function playChupapiMunanyo(voiceChannel){

  const connected = await voiceChannel.join();
  // connected.play("sounds/chupapi-munanyo.mp3)

  const player = await connected.play(fs.createReadStream("sounds/chupapi-munanyo.mp3"));


  player.on('start', () => {
	console.log('audio.mp3 is now playing!');});

  player.on('finish', () => {
	console.log('audio.mp3 has finished playing!');

  connected.leave();
});

  
  return
}

client.login(process.env.TOKEN);