const nodeosu = require("node-osu");
const osuembed = require("../../Embeds/CommandEmbeds/SearchEmbeds/osuembed");
const configosu = require("../../config.json").osuapikey;
const osu = new nodeosu.Api(configosu, {
  // Set your API Key in config.json
  resAsError: true, // Reject on not found instead of returning nothing. (default: true)
});

module.exports = {
  name: "osu",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Osu tracker😴",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const user = args.join(" ");
    try {
      const osuUser = await osu.getUser({ u: user });
      osuembed(Client, msg, Discord, osuUser);
    } catch (error) {
      console.log(error);
      return msg.channel.send("Jogador não encontrado!");
    }
  },
};