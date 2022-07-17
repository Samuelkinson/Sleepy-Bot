const slots = require("../../Embeds/CommandEmbeds/FunEmbeds/slotsembed");

module.exports = {
  name: "slots",
  aliases: ['roleta'],
  permissions: [],
  cooldown: 0,
  description: "Joga slots😴",
  premium: false,
  premiumguild: false,
  owner: false,

  execute(Client, msg, args, Discord) {
    slots(Client, msg, args, Discord);
  },
};
