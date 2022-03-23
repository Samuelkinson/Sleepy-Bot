const fs = require("fs");
const DefaultPrefix = require("../../config.json").prefix;
const Nocommand = require("../../Embeds/Command/NoCommand");
const CommandInfo = require("../../Embeds/Command/CommandInfo");
const GuildSchema = require("../../Schemas/Guild-Schema");

const HelpPagination = require("../../Embeds/Help/HelpPagination");
const HelpAdmin = require("../../Embeds/Help/HelpAdmin");
const HelpFun = require("../../Embeds/Help/HelpFun");
const HelpUtility = require("../../Embeds/Help/HelpUtility");
const HelpVoice = require("../../Embeds/Help/HelpVoice");
const HelpSearch = require("../../Embeds/Help/HelpSearch");
const EconomySearch = require("../../Embeds/Help/HelpEconomy");

module.exports = {
  name: "help",
  aliases: ["socorro", "h", "ebook", "ajuda"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 0,
  description: `Comando de ajuda | ${DefaultPrefix}help [Commando] ou [Categoria] `,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    let Prefix;
    let data = await GuildSchema.findOne({ GuildID: msg.guild.id });
    if (data) Prefix = data.prefix;
    else Prefix = DefaultPrefix;

    let categories = [];
    // Turns Folders in Commands to categories and gets every command inside the folder
    fs.readdirSync("./commands/").forEach((dir) => {
      const commands = fs
        .readdirSync(`./commands/${dir}`)
        .filter((file) => file.endsWith(".js"));
      const cmds = commands.map((command) => {
        let file = require(`../../Commands/${dir}/${command}`);
        if (!file.name) return "No Command Name";

        let name = file.name.replace(".js", "");
        return `\`${name}\``;
      });
      let data = new Object();

      data = {
        name: dir.toUpperCase(),
        value: cmds.length === 0 ? "`In progress`" : cmds.join(" "),
      };

      categories.push(data);
    });

    if (args.length > 1) return Nocommand(msg, Discord, Client, Prefix);
    if (!args[0]) {
      HelpPagination(Discord, Client, msg, categories, Prefix);
    } else {
      const cmd = args[0].toLowerCase();
      const command =
        Client.commands.get(cmd) ||
        Client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      if (command) return CommandInfo(msg, Discord, command, Client);

      if (cmd === "admin" || cmd === "a" || cmd === "1") return HelpAdmin(Discord, Client, msg, categories, Prefix);
      else if (cmd === "diversão" || cmd === "d" || cmd === "2") return HelpFun(Discord, Client, msg, categories, Prefix);
      else if (cmd === "utilidade" || cmd === "u" || cmd === "3") return HelpUtility(Discord, Client, msg, categories, Prefix);
      else if (cmd === "voz" || cmd === "v" || cmd === "4") return HelpVoice(Discord, Client, msg, categories, Prefix);
      else if (cmd === "procura" || cmd === "p" || cmd === "5") return HelpSearch(Discord, Client, msg, categories, Prefix);
      else if (cmd === "economia" || cmd === "e" || cmd === "6") return EconomySearch(Discord, Client, msg, categories, Prefix);

      if (!command) return Nocommand(msg, Discord, Client, Prefix);
    }
  },
};
