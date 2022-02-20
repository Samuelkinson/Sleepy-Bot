const PremiumGuildSchema = require("../../Schemas/Premium-Guild-Schema");

module.exports = {
  name: "remove-premiumguild",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Remove Premium Guild",
  premium: false,
  premiumguild: false,
  owner: false,

  async execute(Client, msg, args, Discord) {
    if (!args[0]) return msg.channel.sends(`Preciso de um guild id!`);
    if (!Client.guilds.cache.has(args[0]))
      return msg.channel.sends(`Guild id inválido!`);

    PremiumGuildSchema.findOne({ Guild: args[0] }, async (err, data) => {
      if (!data) return msg.channel.sends(`Guild id não está na DB!`);
      data.delete();
      return msg.channel.send("Premium retirado!");
    });
  },
};
