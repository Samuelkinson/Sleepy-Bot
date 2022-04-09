const InventorySchema = require("../../Schemas/Inventory-Schema");
const Emojis = require('../../Resources/Emojis.json').Emojis;


module.exports = {
  name: "add",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Adiciona Sleepy's`,
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {

    const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
    const member = msg.mentions.members.first();
    if (!member) return msg.channel.send("Preciso de um membro!");
    if (!args[1]) return msg.channel.send(`Preciso de ${SleepyEmoji}`);
    if (isNaN(args[1])) return msg.channel.send(`${SleepyEmoji} têm de ser um número`);
    newcoins = parseInt(args[1]);

    InventorySchema.findOne(
      {
        id: member.id,
      },
      async (err, data) => {
        if (data) {
          data.Nickname = member.user.username,
          data.SleepyCoins =  data.SleepyCoins  + newcoins;
          await data.save()
          return msg.channel.send(`Foram adicionadas \`${newcoins}\` ${SleepyEmoji} a \`${member.user.username}\``);
        } else {
          let newData = new InventorySchema({
            Nickname: member.user.username,
            id: member.id,
            SleepyCoins : newcoins,
            Inventory:{
                [`PlaceHolder`]: 0
                }
          });
          newData.save();
          return msg.channel.send(`Foram adicionadas \`${newcoins}\` ${SleepyEmoji} a \`${member.user.username}\``);
        }
      }
    );
  },
};
