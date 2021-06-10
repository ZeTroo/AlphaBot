const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = async (member) => {
    const client = member.client
    if (member.guild.id === "836905792879853588") {

        client.channels.cache.get('839986381324681246').send(`**${member.user.tag}** viens de quitter le serveur. Fait bonne route :)`)
    }
}