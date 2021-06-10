const Discord = require("discord.js");
const { footer, color } = require('../../db/config.json');

module.exports.run = async (bot, message, args) => {

    message.delete();

    if(message.author.id !== "356344219813806080") return message.channel.send(`Vous n'avez pas la permission.`);

    let bicon = bot.user.displayAvatarURL();

    let string = '';
    bot.guilds.cache.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;

    let botembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('Voici la liste des serveurs où ce trouve AlphaBot')
        .setDescription(string)
        .setTimestamp()
        .setThumbnail(bicon)

    message.channel.send(botembed);
}

module.exports.help = {
    name: "serverlist",
    aliases: ["sl"],
    category: "Owner",
    ownerOnly: true
}