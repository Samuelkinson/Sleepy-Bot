const InventorySchema = require("../../Schemas/Inventory-Schema");
const Emojis = require('../../Resources/Emojis.json').Emojis

module.exports = {
  name: "give",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Oferece Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const SleepyCoins = Client.emojis.cache.get(Emojis.SleepyCoin);  
    const member = msg.mentions.members.first();

    if (!member) return msg.channel.send("Preciso de um membro!");
    if (!args[1]) return msg.channel.send(`Preciso de ${SleepyCoins}`);
    if (isNaN(args[1])) return msg.channel.send(`Sleepy's ${SleepyCoins} têm de ser um número`);
    if(msg.author.id === member.id) return msg.channel.send(`Não podes oferecer Sleepy's${SleepyCoins} a ti mesmo`); 
    givecoins = parseInt(args[1]);

    InventorySchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          if (data.SleepyCoins < givecoins)return msg.channel.send(`Apenas tens \`${data.SleepyCoins}\` ${SleepyCoins} `);
          //Remove giver coins
          data.SleepyCoins = data.SleepyCoins - givecoins;
          await data.save()  
          InventorySchema.findOne(
            {
              id: member.id,
            },
            async (err, data) => {
              if (data) {
                //Add receiver coins
                data.SleepyCoins = data.SleepyCoins + givecoins;
                await data.save()
                return msg.channel.send(`\`${member.user.username}\` recebeu \`${givecoins}\`${SleepyCoins}`);
              } else {
                let newData = new InventorySchema({
                  Nickname: member.user.username,
                  id: member.id,
                  SleepyCoins: givecoins,
                  Inventory:{
                    [`PlaceHolder`]: 0,
                    }
                });
                newData.save();
                return msg.channel.send(`\`${member.user.username}\` recebeu \`${givecoins}\`${SleepyCoins}`);
              }
            }
          );
        } else {
          return msg.channel.send(`\`${msg.author.username}\` não tens Sleepy's ${SleepyCoins}!`);
        }
      }
    );
   
  },
};
