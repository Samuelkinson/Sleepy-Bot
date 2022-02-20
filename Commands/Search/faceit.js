const fetch = require("node-fetch");
const FACEIT_API_KEY = require("../../config.json").faceitapikey;
const faceitembed = require("../../Embeds/CommandEmbeds/SearchEmbeds/faceit");
module.exports = {
  name: "faceit",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Procura o perfil faceit",
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    const nickname = args.join(" ");
    if (!nickname) return msg.reply("Preciso de um utilizador."); // If no user
    try {
      //Main Fetch
      let response = await fetch(
        `https://open.faceit.com/data/v4/players?nickname=${nickname}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${FACEIT_API_KEY}`,
          },
        }
      ).then((res) => res.json());

      //Region Rank
      let responseRegion = await fetch(
        `https://open.faceit.com/data/v4/rankings/games/csgo/regions/${response.games.csgo.region.toUpperCase()}/players/${
          response.player_id
        }?limit=1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${FACEIT_API_KEY}`,
          },
        }
      ).then((res) => res.json());

      //Country Rank
      let responseCountry = await fetch(
        `https://open.faceit.com/data/v4/rankings/games/csgo/regions/${response.games.csgo.region.toUpperCase()}/players/${
          response.player_id
        }?country=${response.country}&limit=1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${FACEIT_API_KEY}`,
          },
        }
      ).then((res) => res.json());

      //Stats
      let responseStats = await fetch(
        `https://open.faceit.com/data/v4/players/${response.player_id}/stats/csgo`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${FACEIT_API_KEY}`,
          },
        }
      ).then((res) => res.json());

      //Embed
      faceitembed(
        Client,
        msg,
        args,
        Discord,
        response,
        responseStats,
        responseCountry,
        responseRegion
      );
    } catch (error) {
      console.log(error);
      msg.channel.send("Não encontrei.");
    }
  },
};
