const {Discord} = require('discord.js');
const { prefix} = require("../db/config.json");

module.exports = (client) => {
    let { name } = require('../package-lock.json')
    function setActivity(){
        let Gameinfo = [`${prefix}help | alpha-bot.fr`, `${prefix}help | ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres`,`${prefix}help | ${client.guilds.cache.size} serveurs`];
    
        let random = Math.floor(Math.random() * Gameinfo.length);
          
            client.user.setActivity(Gameinfo[random], {
              type: "WATCHING",
            });
        
      }setInterval(setActivity, 1000 * 60 * 0.25)
    console.log(`[ Handler ] : ${client.user.username} est prêt a l'utilisation !`)
}