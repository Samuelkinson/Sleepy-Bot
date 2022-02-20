const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

module.exports = {
  name: "sleep",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Dorme para ganhar Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const sleeplocations = [
      "na cama",
      "no sofá",
      "no carro",
      "no chão",
      "na mesa da cozinha",
      "na rua",
      "num banco de um parque",
      "na prisão",
      "numa cadeira gamer",
    ];
    const locations = Math.floor(Math.random() * sleeplocations.length);
    const newcoins = Math.floor(Math.random() * 200) + 1;
    msg.channel.send(
      `Adormeceste ${sleeplocations[locations]} e recebeste \`${newcoins}\` Sleepy's 😴`
    );

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
