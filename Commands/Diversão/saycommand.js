const Prefix = require("../../Config.json").prefix;

module.exports = {
  name: "repete",
  aliases: ["say", 'diz'],
  permissions: [],
  cooldown: 5,
  description: "Faz o bot dizer algo com embed😴",
  premium: false,
  premiumguild: false,
  owner: false,

  async execute(Client, msg, args, Discord) {
    const messageToSay = args.join(" ");
    if (!messageToSay[0])
      return msg.channel.send({ content: `Escreve "algo"` });

    const sayEmbed = new Discord.MessageEmbed()
      .setColor("#ff748c")
      .addFields({
        name: `${msg.author.username}™ quer dizer:`,
        value: `${messageToSay}`,
        inline: true,
      });
    msg.channel.send({ embeds: [sayEmbed] }).then(msg.delete());
  },
};
