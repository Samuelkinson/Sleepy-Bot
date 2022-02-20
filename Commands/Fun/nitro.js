const Prefix = require("../../Config.json").prefix;
const nitro = require("../../Embeds/CommandEmbeds/FunEmbeds/discordnitroembed");

module.exports = {
  name: "nitro",
  aliases: ["nitro", "freenitro"],
  permissions: [],
  cooldown: 0,
  description: "Nitro grátis totalmente real 😴",
  premium: false,
  premiumguild: false,
  owner: false,

  execute(Client, msg, args, Discord) {
    if (args[0]) return msg.channel.send({ content: `Usa ${Prefix}nitro` });
    return nitro(Client, msg, args, Discord);
  },
};
