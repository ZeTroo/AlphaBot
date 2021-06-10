const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = (guild) => {
  let client = guild.client;

  const embed = new MessageEmbed()
    .setDescription(`<:btn_minus:840210611345948674> **| Serveur quitté ! Le serveur** `+ "`"+ guild.name +"`" + ` **m'a expulsé...**`)
    .setColor(color)
    
  client.channels.cache.get('840218641591959574').send(embed);
}