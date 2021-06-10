const { MessageEmbed } = require("discord.js")
const { color, footer } = require("../../db/config.json");
exports.run = async (client, message, args, level) => {
    try {
      let notAnimated = []
      let animated = []
  
      message.guild.emojis.cache.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString())
        else notAnimated.push(emoji.toString())
      })
  
      if (!animated[0]) animated = ['None']
      if (!notAnimated[0]) notAnimated = ['None']
  
      const embed = new MessageEmbed()
      .setTitle('Voici les emojis de ce serveur:')  
      .setDescription('**Emojis animé:**\n' + animated.join(' ') + '\n\n**Emojis non-animé:**\n' + notAnimated.join(' '))
      .setColor(color)
      message.channel.send(embed)
    } catch (err) {
      message.channel.send(client.errors.genericError + err.stack).catch();
    }
  }
    
  exports.help = {
    name: 'emojis',
    category: 'Utilitaire',
    aliases: [],

  }