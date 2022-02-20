const PremiumSchema = require("../../Schemas/Premium-Schema");

module.exports = {
  name: "premium",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Adiciona Premium a um utilizador",
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    const member = msg.mentions.members.first();
    if (!member) return msg.channel.send("Preciso de um membro!");

    const data = await PremiumSchema.findOne({
      Nickname: member.user.username,
      User: member.id,
    });

    if (data) {
      await PremiumSchema.findOneAndRemove({
        Nickname: member.user.username,
        User: member.id,
      });

      msg.channel.send(`\`${member.user.username}\` já é Premium!`);

      let newData = new PremiumSchema({
        Nickname: member.user.username,
        User: member.id,
      });
      newData.save();
    } else if (!data) {
      msg.channel.send(
        `\`${member.user.username}\` foi adicionado como Premium!`
      );

      let newData = new PremiumSchema({
        Nickname: member.user.username,
        User: member.id,
      });
      newData.save();
    }
  },
};
