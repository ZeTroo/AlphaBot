const { PREFIX, footer, color } = require("../../db/config.json");


const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
  message.delete()
 
    
    message.channel.send(`${message.author}, Le ping est de ${new Date().getTime() - message.createdTimestamp}ms.`)
  

  };

  module.exports.help = {
    name : "ping",
    description : "Renvoie les commandes du bot",
    args : false,
    cooldown : 10,
    aliases: [],
    category: 'Utilitaire',
    ownerOnly: false
    };