const fetch = require("node-fetch");
const memeEmbed = require("../../Embeds/CommandEmbeds/FunEmbeds/memeembed");

module.exports = {
  name: "meme",
  aliases: ["memes", "rir"],
  permissions: [],
  cooldown: 0,
  description: "Envia um meme 😴",
  premium: false,
  premiumguild: false,
  owner: false,

  async execute(Client, msg, args, Discord) {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((res) => res.json())
      .then(async (json) => {
        return memeEmbed(Client, msg, args, Discord, json);
      });
  },
};
