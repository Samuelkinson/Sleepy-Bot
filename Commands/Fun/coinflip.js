const Prefix = require("../../Config.json").prefix;

module.exports = {
  name: "coinflip",
  aliases: ["cf", "coin"],
  permissions: [],
  cooldown: 3,
  description: "Atira a moeda ao ar 😴",
  premium: false,
  premiumguild: false,
  owner: false,

  execute(Client, msg, args, Discord) {
    let random = Math.floor(Math.random() * Math.floor(2));
    if (args[0]) return msg.channel.send({ content: `Usa ${Prefix}cf` });
    else if (random === 0) {
      msg.reply(`Cara`);
    } else if (random === 1) {
      msg.reply(`Coroa`);
    }
  },
};
