

var Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
    console.log("Bot is ready");
    getUsers();
});

function getAllUsers(){

   const j_guild = client.guilds.fetch('850878886866321438');

   j_guild.then( guild => {
    guild.members.fetch()
    .then(list => {
      console.log(list + " nope");
    }

    )
   })
  .catch(console.error);
}

async function getUsers(){
    const j_guild = await client.guilds.fetch('850878886866321438');
    
    
    console.log("before fetch"); 
    const j_guild_members = await j_guild.members.fetch();

    console.log("here");
    console.log(j_guild_members);

    j_guild_members.forEach(xuser => {
        console.log(xuser.user.username);
    })

    return
  }

// function playChupapiMunanyo(){
//     let sound_player = 
// }

client.login(process.env.TOKEN);