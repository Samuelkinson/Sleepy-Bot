module.exports = {
  name: "servericon",
  aliases: ["sicon"],
  permissions: [],
  cooldown: 0,
  description: "",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.guild.name, msg.guild.iconURL())
      .setColor("#a35ecc")
      .setImage(msg.guild.iconURL())
      .setTimestamp();
    await msg.channel.send({ embeds: [embed] });
  },
};
