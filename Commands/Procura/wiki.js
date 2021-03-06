const { summary } = require("wikipedia");
const wiki = require("wikipedia");
const disambiguationembed = require("../../Embeds/CommandEmbeds/SearchEmbeds/WikiEmbed/disambiguationembed");
const standardembed = require("../../Embeds/CommandEmbeds/SearchEmbeds/WikiEmbed/standardembed");

module.exports = {
  name: "wiki",
  aliases: ["wikipedia"],
  permissions: [],
  cooldown: 0,
  description: "Procura na Wikipédia😴",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    let query = args.join(" ");
    if (!query) return msg.channel.send("Preciso de palavras!");

    try {
      const page = await wiki.page(query);
      const summary = await page.summary();

      if (summary.type === "disambiguation") {
        disambiguationembed(Client, msg, args, Discord, summary);
      } else {
        standardembed(Client, msg, args, Discord, summary);
      }
    } catch (error) {
      return msg.channel.send(`Não consegui encontrar ${query}`);
    }
  },
};
