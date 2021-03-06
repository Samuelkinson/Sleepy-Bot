const ytsr = require("ytsr");
const youtubeembed = require("../../Embeds/CommandEmbeds/SearchEmbeds/youtubeembed");

module.exports = {
  name: "youtube",
  aliases: ["ytsr", "ytsearch", "yt"],
  permissions: [],
  cooldown: 0,
  description: "Procura no Youtube😴",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    let query = args.join("");
    if (!query) return msg.channel.send("Preciso de palavras!");

    const res = await ytsr(query).catch((e) => {
      return msg.channel.send("Sem resultados");
    });

    const video = res.items.filter((i) => i.type === "video")[0];
    if (!video) return msg.channel.send("Sem resultados");
    youtubeembed(Client, msg, args, Discord, video);
  },
};
