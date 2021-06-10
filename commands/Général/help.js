const { prefix, footer, color, owner } = require("../../db/config.json");
const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
    let categorys = [];
    let commandsCat = [];
    let commands = [];
    
commands = client.commands
                
    commands.forEach((cmd) => {
      if (!categorys.includes(cmd.help.category)) {
        categorys.push(cmd.help.category);
      }
    });
    
    embed = new MessageEmbed()
      .setAuthor(`${client.user.username} || Liste des commandes`, client.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`> Pour voir une commande spécifique, faites \`${prefix}commande help\`\n> Nombre de commandes: \`${commands.size}\``)
      .setColor(color)
      .setFooter(footer);
    
    categorys.sort().forEach((cat) => {
      commandsCat = commands.filter((cmd) => cmd.help.category === cat);
      embed.addField(`${cat} (${commandsCat.size})`, commandsCat.map((cmd) => `\`${cmd.help.name}\``).join(", "))
    })
    message.channel.send(embed)
    
    
}
module.exports.help = {
    name : "help",
    aliases: ["h"],
    description : "Renvoie les commandes du bot",
    category: "Général",
    args : false,
    cooldown : 10,
    ownerOnly: false
    }; 