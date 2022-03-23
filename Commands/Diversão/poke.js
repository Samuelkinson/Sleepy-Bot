const superagent = require("snekfetch");
const pokeembed = require("../../Embeds/CommandEmbeds/FunEmbeds/poke");

module.exports = {
  name: "poke",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Dá poke em alguém😴",
  premium: false,
  premiumguild: false,
  owner: false,

  execute(Client, msg, args, Discord) {
    const user = msg.mentions.users.first();

    if (!user) return msg.channel.send("Preciso de uma pessoa!");
    if (msg.author === user)
      return msg.channel.send("Não te podes fazer isto!");

    superagent
      .get("https://nekos.life/api/v2/img/poke")
      .end((err, response) => {
        return pokeembed(Client, msg, args, Discord, user, response);
      })
      .catch((err) => msg.channel.send("Erro"));
  },
};
