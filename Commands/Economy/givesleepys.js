const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");

module.exports = {
  name: "give",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Dorme para ganhar Sleepy's 😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const member = msg.mentions.members.first();

    if (!member) return msg.channel.send("Preciso de um membro!");
    if (!args[1]) return msg.channel.send(`Preciso de Sleepy's 😴`);
    if (isNaN(args[1])) return msg.channel.send(`Sleepy's 😴 têm de ser um número`);
    if(msg.author.id === member.id) return msg.channel.send(`Não podes oferecer Sleepy's 😴 a ti mesmo`); 
    givecoins = parseInt(args[1]);
    SleepyCoinsSchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
        if (data) {
          if (data.SleepyCoins < givecoins)
            return msg.channel.send(
              `Apenas tens \`${data.SleepyCoins}\` Sleepy's😴 `
            );

          //Remove giver coins
          SleepyCoins = data.SleepyCoins - givecoins;
          data.delete();
          let newData = new SleepyCoinsSchema({
            Nickname: msg.author.username,
            id: msg.author.id,
            SleepyCoins: SleepyCoins,
          });
          newData.save();

          //Add reciver coins
          SleepyCoinsSchema.findOne(
            {
              id: member.id,
            },
            async (err, data) => {
              if (data) {
                SleepyCoins = data.SleepyCoins + givecoins;
                data.delete();
                let newData = new SleepyCoinsSchema({
                  Nickname: member.user.username,
                  id: member.id,
                  SleepyCoins: SleepyCoins,
                });
                newData.save();
                return msg.channel.send(
                  `\`${member.user.username}\` recebeu \`${givecoins}\`Sleepy's 😴`
                );
              } else {
                let newData = new SleepyCoinsSchema({
                  Nickname: member.user.username,
                  id: member.id,
                  SleepyCoins: givecoins,
                });
                newData.save();
                return msg.channel.send(
                  `\`${member.user.username}\` não tinha Sleepy's 😴, foram-lhe adicionadas \`${givecoins}\``
                );
              }
            }
          );
        } else {
          return msg.channel.send(
            `\`${msg.author.username}\` não tens Sleepy's 😴!`
          );
        }
      }
    );
  },
};
