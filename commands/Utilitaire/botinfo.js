const { PREFIX, footer, color } = require("../../db/config.json");

const { MessageEmbed} = require("discord.js");



module.exports.run = (client, message, args) => {
  const { version } = require("discord.js");
  let cpuStat = require("cpu-stat");
  let os = require('os');
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
  if (err) {
      return console.log(err);
  }
})
  const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(message.author.tag, message.author.avatarURL())
        .addField(":pencil: • __Versions__", "NodeJS : " + "`v11.11.0`" + "\n" + "DiscordJS : " + "`" + `v${version}` + "`" + "", true)
        .addField("📋 • __Statistiques__", "`Serveurs : "+client.guilds.cache.size+"`" + "\n `Utilisateurs : " +client.users.cache.size+"`", true)
        .addField("📌 • __Développeur__", "`ZeTro#0002`", true)
        .addField(":desktop: • __Système__", "Plateforme : " + "`" +  `${os.platform()}`+ "` \n Arch : " + "`" + `${os.arch()}` + "` \n CPU : " +  "`" + `${os.cpus().map(i => `${i.model}`)[0]}` + "`")
        .addField("💻 • __Processeur__", "RAM: " + "`" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MB` | Latence avec l'API :" + "`" + `${Math.round(client.ws.ping)}` + " ms`")
        .addField(":bulb: • __En ligne depuis__", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures  ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ', true)
       .setFooter(footer)
        message.channel.send(embed);
      }


  module.exports.help = {
    name: "botinfo",
    description : "Renvoie les informations du bot",
    args : false,
    cooldown : 10,
    aliases: ["bi"],
    category: 'Utilitaire',
    ownerOnly: false
    }; 