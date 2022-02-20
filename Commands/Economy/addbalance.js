const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

module.exports = {
  name: "add",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Adiciona Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    const member = msg.mentions.members.first();

    if (!member) return msg.channel.send("Preciso de um membro!");
    if (!args[1]) return msg.channel.send(`Preciso de Sleepy's 😴`);
    if (isNaN(args[1]))
      return msg.channel.send(`Sleepy's 😴 têm de ser um número`);
    newcoins = parseInt(args[1]);

    SleepyCoinsSchema.findOne(
      {
        id: member.id,
      },
      async (err, data) => {
        if (data) {
          SleepyCoins = data.SleepyCoins + newcoins;
          data.delete();
          let newData = new SleepyCoinsSchema({
            Nickname: member.user.username,
            id: member.id,
            SleepyCoins: SleepyCoins,
          });
          newData.save();

          return msg.channel.send(
            `Foram adicionadas \`${newcoins}\` Sleepy's 😴 a \`${member.user.username}\``
          );
        } else {
          let newData = new SleepyCoinsSchema({
            Nickname: member.user.username,
            id: member.id,
            SleepyCoins: newcoins,
          });
          newData.save();
          return msg.channel.send(
            `Foram adicionadas \`${newcoins}\` Sleepy's 😴 a \`${member.user.username}\``
          );
        }
      }
    );
  },
};
