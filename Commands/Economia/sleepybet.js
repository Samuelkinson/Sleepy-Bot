const InventorySchema = require('../../Schemas/Inventory-Schema');
const Emojis = require('../../Resources/Emojis.json').Emojis

module.exports = {
  name: "double-or-nothing",
  aliases: ["doublecoins", "double", "bet", 'aposta', 'dobro', 'dobroounada'],
  permissions: [],
  cooldown: 0,
  description: `Sleepy's 😴 o dobro ou nada!`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    
    const SleepyCoins = Client.emojis.cache.get(Emojis.SleepyCoin);  
    const win = Math.floor(Math.random() * 2);
    if (!args[0]) return msg.channel.send(`Preciso de Sleepy's 😴`);
    if (isNaN(args[0]))
      return msg.channel.send(`Quantia tem de ser um número!`);

    newcoins = parseInt(args[0]);
    wincoins = newcoins * 2
    InventorySchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          if (data.SleepyCoins < newcoins) return msg.channel.send(`Só tens \`${data.SleepyCoins}\` ${SleepyCoins} `);
          if (win === 1) {
            data.SleepyCoins =  data.SleepyCoins  + wincoins;
            msg.channel.send(`Ganhaste ${wincoins} ${SleepyCoins} `)
          } else {
            data.SleepyCoins =  data.SleepyCoins  - newcoins;
            msg.channel.send(`Perdeste ${newcoins} ${SleepyCoins} `)
          }
         data.save()
        } else{
          msg.channel.send(`Não tens ${SleepyCoins}`);
        }
      }
    );
  },
};
