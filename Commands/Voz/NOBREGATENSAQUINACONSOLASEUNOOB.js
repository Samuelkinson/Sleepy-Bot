const fs = require("fs");
const DefaultPrefix = require("../../config.json").prefix;

module.exports = {
  name: "teste",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  cooldown: 0,
  description: `Comando de ajuda | ${DefaultPrefix}help [Commando] ou [Categoria] `,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {

    // Turns Folders in Commands to categories and gets every command inside the folder
    fs.readdirSync("./commands/").forEach((dir) => {
      const commands = fs
        .readdirSync(`./commands/${dir}`)
        .filter((file) => file.endsWith(".js"));
      const cmds = commands.map((command) => {
        let file = require(`../../Commands/${dir}/${command}`); // Gets the file
        if (!file.name) return "Não existe esse comando!"; // If the command doesn't have a name, it will return this message

        let name = file.name.replace(".js", ""); // Gets the name of every command
        return `\`${name}\``;
      });

      let i = 0
      while (i < cmds.length) {   
        const commandnames = cmds[i].toLowerCase().replace(/\`/g, ""); 
        const command =
        Client.commands.get(commandnames ) ||
        Client.commands.find((a) => a.aliases && a.aliases.includes(commandnames)); 
        console.log(command) 
        i++;
      }
      });
    }};

