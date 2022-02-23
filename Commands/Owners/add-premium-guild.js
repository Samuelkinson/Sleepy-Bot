const PremiumGuildSchema = require("../../Schemas/Premium-Guild-Schema");
const day = require("dayjs");

module.exports = {
  name: "premiumguild",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "?premiumguild <msg.guild.id> 2022-18-03",
  premium: false,
  premiumguild: false,
  owner: true,
  async execute(Client, msg, args, Discord) {
    if (!args[0]) return msg.channel.send(`Preciso de um guild id!`);
    if (!Client.guilds.cache.has(args[0])) return msg.channel.send(`Guild id inválido!`);

    PremiumGuildSchema.findOne({ Guild: args[0] }, async (err, data) => {
      if (data) data.delete(); //So that you can be able to change the Expire date!

      if (args[1]) {
        const Expire = day(args[1]).valueOf();

        let newData = new PremiumGuildSchema({
          GuildName: msg.guild.name,
          Guild: args[0],
          Expire,
          Permanent: false,
        });
        newData.save();
      } else {
        //If no date to expire it will be permanent :)
        let newData = new PremiumGuildSchema({
          GuildName: msg.guild.name,
          Guild: args[0],
          Expire: 0,
          Permanent: true,
        });
        newData.save();
      }
      msg.channel.send(`\`${msg.guild.name}\` agorá é uma Guild Premium`);
    });
  },
};
