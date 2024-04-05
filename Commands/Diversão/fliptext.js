const flip = require("flip-text");

module.exports = {
  name: "invertetexto",
  aliases: ["fliptext"],
  permissions: [],
  cooldown: 0,
  description: "Inverte o texto😴",
  premium: false,
  premiumguild: false,
  owner: false,

  async execute(Client, msg, args, Discord) {
    if (!args[0]) return msg.reply("Preciso de texto");

    var flipped = [];
    args.forEach((arg) => {
      flipped.push(flip(arg));
    });

    await msg.channel.send(flipped.join(" ")).then(msg.delete());
  },
};
