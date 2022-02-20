const roastEmbed = require("../../Embeds/CommandEmbeds/FunEmbeds/roastembed/RoastEmbed");
const SelfroastEmbed = require("../../Embeds/CommandEmbeds/FunEmbeds/roastembed/SelfRoastEmbed");

module.exports = {
  name: "piada",
  aliases: ["r", "humilha", "roast"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Roast a alguém😴",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    if (args[0]) {
      const mentionedMember = msg.mentions.users.first();
      if (!mentionedMember)
        return msg.channel.send({ content: "Não encontrei esse ser humano" });
      roastEmbed(Discord, Client, mentionedMember, msg);
    } else {
      const user = msg.author.username;
      SelfroastEmbed(Client, msg, Discord, user);
    }
  },
};
