const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");
const locations = require('../../Embeds/CommandEmbeds/Economy/LocationRandom')

module.exports = {
  name: "sleep",
  aliases: ['dormir', 'mimir'],
  permissions: [],
  cooldown: 0,
  description: `Dorme para ganhar Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    
    const newcoins = Math.floor(Math.random() * 200) + 1;
    msg.channel.send(`Adormeceste ${locations()} e recebeste \`${newcoins}\` Sleepy's 😴`);

    SleepyCoinsSchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          data.Nickname = msg.author.username,
          data.SleepyCoins =  data.SleepyCoins  + newcoins;
          await data.save()
        } else {
          let newData = new SleepyCoinsSchema({
            Nickname: msg.author.username,
            id: msg.author.id,
            SleepyCoins: newcoins,
          });
          newData.save();
        }
      }
    );
  },
};
