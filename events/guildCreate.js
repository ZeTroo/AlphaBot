const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = (guild) => {
  let client = guild.client;

  const embed = new MessageEmbed()
    .setDescription(`<:btn_plus:840210584716967947> **| Nouveau serveur ! **`+ "`"+ guild.name +"`" + ` **est le ${client.guilds.cache.size}ème serveur où l'on m'a ajouté !**`)
    .setColor(color)
    
  client.channels.cache.get('840218641591959574').send(embed);
}