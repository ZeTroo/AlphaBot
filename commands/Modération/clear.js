const {Discord, MessageEmbed, Collection } = require('discord.js');
const { color } = require('../../db/config.json');

module.exports.run = async (client, message, args) => {
    let embedFirst = new MessageEmbed()
        .setTitle('Assistance')
        .setColor(color)
        .setFooter("Jarvis")

    embedFirst.setTitle('Erreur Argument')
    .setDescription(`\`\`\`diff\n- Argument manquant\n+ Vous devez spécifier un nombre de message à supprimer\`\`\``);
    if(!args[0]) return message.channel.send(embedFirst).catch(console.error);


    embedFirst.setTitle('Erreur Permission')
    .setDescription(`\`\`\`diff\n- Vous n'avez pas les permissions \n+ Permission requis: MANAGE_MESSAGES\`\`\``)
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(embedFirst).catch(console.error);


    embedFirst.setTitle('Erreur Permission')
    .setDescription(`\`\`\`diff\n- Je n'ai pas la permission \n+ Permission requis: MANAGE_MESSAGES\`\`\``)
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed2).catch(console.error);

    message.channel.bulkDelete(args[0]);
    let embedreply = new MessageEmbed()
    .addField(`<:Yes:827866277220712458> Suppression de message:`,` j'ai supprimés ${args[0]} messages !`)
    .setColor(color)
    message.channel.send(embedreply).then(message => message.delete({ timeout: 5000 }));

};

module.exports.help = {
    name: "clear",
    aliases: [],
    category: "Modération",
    ownerOnly: false
}