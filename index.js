const { Discord, Client, Collection, MessageEmbed } = require("discord.js");
const { token , prefix } = require("./db/config.json");
const { readdirSync } = require("fs");
const client = new Client();
require('./util/eventLoader')(client);

["commands", "cooldowns", "aliases"].forEach(x => client[x] = new Collection());

client.prefix = prefix

//TODO: Premet de chargÃ© toutes les commandes du bot dans des sous-dossiers
const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach((dirs) => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter((files) =>
            files.endsWith(".js")
        );

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            getFileName.help.aliases.forEach(alias => {
                client.aliases.set(alias, getFileName.help.name);
            });
            console.log(`Commandes chargée : ${getFileName.help.name}`);
        }
    });
};

loadCommands();

Object.defineProperty(Array.prototype, "flat", {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  },
});


client.login(token);
