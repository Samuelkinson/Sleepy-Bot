const fs = require("fs");
const DefaultPrefix = require("../../config.json").prefix;
const Nocommand = require("../../Embeds/Command/NoCommand");
const CommandInfo = require("../../Embeds/Command/CommandInfo");
const GuildSchema = require("../../Schemas/Guild-Schema");

const HelpPagination = require("../../Embeds/Help/HelpPagination");
const HelpAdmin = require("../../Embeds/Help/HelpAdmin");
const HelpFun = require("../../Embeds/Help/HelpFun");
const HelpUtility = require("../../Embeds/Help/HelpUtility");
const HelpSearch = require("../../Embeds/Help/HelpSearch");
const EconomySearch = require("../../Embeds/Help/HelpEconomy");

module.exports = {
  name: "help",
  aliases: ["socorro", "h", "ebook", "ajuda"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 0,
  description: `Comando de ajuda | ${DefaultPrefix}help [Commando] ou [Categoria]😴 `,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    let Prefix;
    let data = await GuildSchema.findOne({ GuildID: msg.guild.id });
    if (data) Prefix = data.prefix;
    else Prefix = DefaultPrefix;

    let categories = [];
    //Transforma o diretorio de comandos em categorias e "pega" todos os comandos dentro do diretorio
    fs.readdirSync("./commands/").forEach((dir) => {
      const commands = fs
        .readdirSync(`./commands/${dir}`)
        .filter((file) => file.endsWith(".js"));
      const cmds = commands.map((command) => {
        let file = require(`../../Commands/${dir}/${command}`); //Pega o comando.js
        if (!file.name) return "Não existe esse comando!"; // Se não existir o comando, retorna um "Não comando"

        let name = file.name.replace(".js", ""); //Pega o nome do comando e remove o .js
        return `\`${name}\``;
      });
      let data = new Object();

      data = {
        name: dir.toUpperCase(),
        value: cmds.length === 0 ? "`Em progresso!`" : cmds.join(" "),
      };

      categories.push(data);
    });

    if (!args[0]) {
      HelpPagination(Discord, Client, msg, categories, Prefix);  //Sem argumentos, mostra o embed default
    } else {
      const cmd = args[0].toLowerCase();
      const command =
        Client.commands.get(cmd) ||
        Client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(command);
      if (command) return CommandInfo(msg, Discord, command, Client); //Se existir o comando, mostra a informação do comando
      if (cmd === "admin" || cmd === "a" || cmd === "1") return HelpAdmin(Discord, Client, msg, categories, Prefix); //Se for admin, mostra o embed de admin
      else if (cmd === "diversão" || cmd === "diversao" || cmd === "d" || cmd === "2") return HelpFun(Discord, Client, msg, categories, Prefix); //Se for diversão, mostra o embed de diversão
      else if (cmd === "utilidade" || cmd === "u" || cmd === "3") return HelpUtility(Discord, Client, msg, categories, Prefix);//Se for utilidade, mostra o embed de utilidade
      else if (cmd === "procura" || cmd === "p" || cmd === "4") return HelpSearch(Discord, Client, msg, categories, Prefix);//Se for procura, mostra o embed de procura
      else if (cmd === "economia" || cmd === "e" || cmd === "5") return EconomySearch(Discord, Client, msg, categories, Prefix);//Se for economia, mostra o embed de economia

      if (!command) return Nocommand(msg, Discord, Client, Prefix);//Se não existir o comando, mostra o embed de não comando
    }
  },
};
