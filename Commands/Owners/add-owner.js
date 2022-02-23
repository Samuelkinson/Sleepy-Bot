const OwnerSchema = require("../../Schemas/Owner-Schema");

module.exports = {
  name: "owner",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Adiciona um Owner",
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    const member = msg.mentions.members.first();
    if (!member) return msg.channel.send("Preciso de um membro!");

    OwnerSchema.findOne(
      {
        User: member.id,
      },
    async (err, data) => {
      if (data) {
        msg.channel.send(`\`${member.user.username}\` já tem owner!`);
        data.Nickname = member.user.username
        await data.save()
      } else if (!data) {
        msg.channel.send(`\`${member.user.username}\` foi adicionado como owner!`);
        let newData = new OwnerSchema({
          Nickname: member.user.username,
          User: member.id,
        });
        newData.save();
      }
    }); 
  },
};
