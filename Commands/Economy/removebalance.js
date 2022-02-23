const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

module.exports = {
  name: "remove",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Tira Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    const member = msg.mentions.members.first() 
    if (!member) return msg.channel.send("Preciso de um membro!");
    if (!args[1]) return msg.channel.send(`Preciso de Sleepy's 😴`);
    if (isNaN(args[1])) return msg.channel.send(`Sleepy's 😴 têm de ser um número`);
    newcoins = parseInt(args[1]);

    SleepyCoinsSchema.findOne(
      {
        id: member.id,
      },
      async (err, data) => {
        if (data) {
          data.Nickname = member.user.username,
          data.SleepyCoins =  data.SleepyCoins  - newcoins;
          await data.save()
          return msg.channel.send(`Foram removidas \`${newcoins}\` Sleepy's 😴 a \`${member.user.username}\``);
        } else { 
          msg.channel.send(`\`${member.user.username}\` não tem Sleepy's`);
        }
      }
    );
  },
};
