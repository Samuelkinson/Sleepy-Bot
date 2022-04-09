const InventorySchema = require("../../Schemas/Inventory-Schema");
const Emojis = require('../../Resources/Emojis.json').Emojis

module.exports = {
  name: "daily",
  aliases: [],
  permissions: [],
  cooldown: 86400,
  description: `Sleepy's 😴 diários`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {

    const SleepyCoins = Client.emojis.cache.get(Emojis.SleepyCoin);  
    const newcoins = Math.floor(Math.random() * 1000) + 1;
    msg.channel.send(`Recebeste \`${newcoins}\` ${SleepyCoins}, volta amanhã!`);

    InventorySchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          data.SleepyCoins = data.SleepyCoins + newcoins;
          await data.save()
        } else {
          let newData = new InventorySchema({
            Nickname: msg.author.username,
            id: msg.author.id,
            SleepyCoins: newcoins,
            Inventory:{
              [`PlaceHolder`]: 0
              }
          });
          newData.save();
        }
      }
    );
  },
};
