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
    wincoins = newcoins * 2
    SleepyCoinsSchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          if (data.SleepyCoins < newcoins) return msg.channel.send(`Só tens \`${data.SleepyCoins}\` Sleepy's😴 `);
          if (win === 1) {
            data.SleepyCoins =  data.SleepyCoins  + wincoins;
            msg.channel.send(`Ganhaste ${wincoins} Sleepy's 😴 `)
          } else {
            data.SleepyCoins =  data.SleepyCoins  - newcoins;
            msg.channel.send(`Perdeste ${newcoins} Sleepy's 😴 `)
          }
         data.save()
        } else{
          msg.channel.send(`Não tens Sleppy's😴`);
        }
      }
    );
  },
};
