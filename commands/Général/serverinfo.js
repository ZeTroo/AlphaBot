const { MessageEmbed } = require("discord.js");

const { footer, color } = require('../../db/config.json');
const moment = require('moment');
module.exports.run = (client, message, args) => {

    const embed = new MessageEmbed()    
      .setColor(color)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .addField("📌 • __Propriétaire__ :", `${message.guild.owner.user}`, true)
      .addField("🌏 • __Région__ :", message.guild.region, true)
      .addField("📋 • __Channels__ :", `**${message.guild.channels.cache.size}** channels`, true)
      .addField("👥 • __Utilisateurs :__ ", `**${message.guild.members.cache.filter(m => !m.user.bot).size}** utilisateurs`, true)
      .addField("🤖 • __Bots__ :", `**${message.guild.members.cache.filter(m => m.user.bot).size}** robots`, true)
      .addField("📄 • __ID__ :", message.guild.id, true)
      .addField("🔒 • __Niveau vérification__ :", `Niveau **${message.guild.verificationLevel}**`, true)
      .addField(":placard: • __Nombre de rôles__ :", `**${message.guild.roles.cache.size}** rôles`, true)
      .addField("🔧 • __Nombre d'émojis :__", `**${message.guild.emojis.cache.size}** émojis`, true)
      .addField(":watch: • __Date de création__ :", `${moment(message.channel.guild.createdAt).format("LL")}`, true)
        .setFooter(footer)
        message.channel.send(embed)

}

module.exports.help = {
    name: "serverinfo",
    description : "Créer un embed pour user info",
    args : false,
    cooldown : 10,
    usage : "<mention d'un utilisateur>",
    aliases: ["si"],
    category: "Général",
    ownerOnly: false
    };