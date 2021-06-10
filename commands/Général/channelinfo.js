const Discord = require('discord.js');
const moment = require('moment');
const { footer, color } = require('../../db/config.json');
moment.locale('fr')

module.exports.run = async(bot, message, args) => {
    message.delete()

    var channel_info = new Discord.MessageEmbed()
        .setTitle("Informations sur ce channel:")
        .setDescription(`**Nom du salon:**` +"<#" + message.channel.id + ">" + `\n**Identifiant:** \`${message.channel.id}\`\n**Type de salon:** \`${message.channel.type}\`\n**Date de création:** \`${moment.utc(message.channel.createdAt).format("LL")}\``)
        .setFooter(footer)
        .setColor(color)
    message.channel.send(channel_info)
}

module.exports.help = {
    name: "channelinfo",
    aliases: ["ci"],
    category: "Général",
}