/* const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");
const SleepyCoinsEmbed = require("../../Embeds/CommandEmbeds/Economy/sleepycoins");
const Emojis = require('../../Resources/Emojis.json').Emojis;

module.exports = {
  name: `sleepy's`,
  aliases: [`sleepycoin`, "sleepycoins", "balance", "inventario"],
  permissions: [],
  cooldown: 0,
  description: `Mostra Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    
    const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
    const member = msg.mentions.members.first() || msg.member;
    if (!member) return msg.channel.send("Preciso de um membro!");

    SleepyCoinsSchema.findOne(
      {
        id: member.id,
      },
      async (err, data) => {
        if (data) {
          let SleepyCoins = data.SleepyCoins;
          SleepyCoinsEmbed(Client, msg, SleepyCoins, member, Discord);
        } else {
          let newData = new SleepyCoinsSchema({
            Nickname: member.user.username,
            id: member.id,
            SleepyCoins: 50,
          });
          newData.save();
          return msg.channel.send(
            `\`${member.user.username}\` não tinha ${SleepyEmoji}, foram-lhe adicionadas \`50\``
          );
        }
      }
    );
  },
};
 */