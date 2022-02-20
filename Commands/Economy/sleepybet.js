const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

module.exports = {
  name: "double-or-nothing",
  aliases: ["doublecoins", "double", "bet"],
  permissions: [],
  cooldown: 0,
  description: `Sleepy's 😴 o dobro ou nada!`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const win = Math.floor(Math.random() * 2);
    if (!args[0]) return msg.channel.send(`Preciso de Sleepy's 😴`);
    if (isNaN(args[0]))
      return msg.channel.send(`Quantia tem de ser um número!`);

    newcoins = parseInt(args[0]);
    SleepyCoinsSchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (!data) return msg.channel.send(`Não tens Sleppy's😴`);
        if (data) {
          if (data.SleepyCoins < newcoins)
            return msg.channel.send(
              `Apenas tens \`${data.SleepyCoins}\` Sleepy's😴 `
            );
          if (win === 1) {
            SleepyCoins = data.SleepyCoins + newcoins * 2;
          } else {
            SleepyCoins = data.SleepyCoins - newcoins;
          }
          data.delete();
          let newData = new SleepyCoinsSchema({
            Nickname: msg.author.username,
            id: msg.author.id,
            SleepyCoins: SleepyCoins,
          });
          newData.save();
        }
      }
    );
  },
};
