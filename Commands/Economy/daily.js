const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

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
    const newcoins = Math.floor(Math.random() * 1000) + 1;
    msg.channel.send(`Recebeste \`${newcoins}\` Sleepy's 😴, volta amanhã!`);

    SleepyCoinsSchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          SleepyCoins = data.SleepyCoins + newcoins;
          data.delete();
          let newData = new SleepyCoinsSchema({
            Nickname: msg.author.username,
            id: msg.author.id,
            SleepyCoins: SleepyCoins,
          });
          newData.save();
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
