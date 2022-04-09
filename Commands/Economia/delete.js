const InventorySchema = require("../../Schemas/Inventory-Schema");

module.exports = {
  name: "delete",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Elimina a economia de Sleepy's 😴!`,
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    const member =  msg.member;
    if (!member) return msg.channel.send("Preciso de um membro!");

    InventorySchema.findOne(
      {
        id: member.id,
      },
      async (err, data) => {
        if (data) {
          data.delete();
          return msg.channel.send(`Apaguei a tua economia toda ${member.user.username}!`);
        } else {
          return msg.channel.send(`Nunca tiveste economia 😴`);
        }
      }
    );
  },
};
