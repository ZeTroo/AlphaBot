const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = async (member) => {
    const client = member.client
    if (member.guild.id === "836905792879853588") {

        client.channels.cache.get('839986270227005481').send(`Bienvenue à toi ${member} sur le serveur de support du bot AlphaBot ! `)
    }
}