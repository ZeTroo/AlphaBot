const {MessageEmbed} = require('discord.js')
const ms = require('ms');
const { footer, color, id_bot } = require('../../db/config.json');

module.exports.run = async(bot, message, args)=>{

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");

        if(!args[0]) return message.channel.send(`Vous n'avez pas spécifié de temps pour le giveaway <ex : !start 1m #giveaway exemple>`)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`Vous n'avez pas utiliser la bonne forme du temps <ex : *start 1m #giveaway exemple>`)
        if(isNaN(args[0][0])) return message.channel.send(`Ce n'est pas un nombre valide <ex : *start 1m #giveaway exemple>`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`Je ne trouve pas le salon selectionné !`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`Aucun prix n'a été selectionner <ex : *start 1m #giveaway exemple>`)
        message.channel.send(`*Giveaway crée dans ${channel}*`)
        let Embed = new MessageEmbed()
        .setTitle(`🎉 | Un nouveau giveaway est apparu !`)
        .setDescription(`🎁 Récompense : **${prize}**\n👤 Crée par : ${message.author}`)
        .setFooter('Fin à')
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(color)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Nombre de réaction : ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Pas assez de personnes on participer pour que je choisisse un gagnant !`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`Le gagnant du giveaway **${prize}** est : ${winner}`).then((member => {
                winner.send({
                    embed: {
                        title: "Félicitation, vous avez gagner un giveaway !",
                        description: `🎁 Récompense : **${prize}**\n🗂️ Serveur : **${message.guild.name}**\n👤 Crée par : ${message.member}`,
                        color: color
                    }
                }); 
            }))
        }, ms(args[0])); 
    }
module.exports.help = {
    name:"start",
    category: "Giveaways",
    aliases: [],
    ownerOnly: false
}