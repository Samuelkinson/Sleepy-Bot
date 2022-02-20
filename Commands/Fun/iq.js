const authorqiembed = require("../../Embeds/CommandEmbeds/FunEmbeds/IQ_embeds/authorqi");
const mentionMemberembed = require("../../Embeds/CommandEmbeds/FunEmbeds/IQ_embeds/mentionmemberqi");

module.exports = {
  name: "iq",
  aliases: ["qi"],
  permissions: [],
  cooldown: 0,
  description: "Teste de QI😴",
  premium: false,
  premiumguild: false,
  owner: false,

  async execute(Client, msg, args, Discord) {
    const mentionMember = msg.mentions.members.first();

    try {
      if (!args[0]) return authorqiembed(Client, msg, args, Discord);
      if (mentionMember) return mentionMemberembed(Client, msg, args, Discord);
    } catch (err) {
      return msg.channel.send({ content: "Não encontrei" }).then(msg.delete());
    }
  },
};
