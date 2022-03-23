const cfembed = require('../../Embeds/CommandEmbeds/FunEmbeds/cfembed')

module.exports = {
  name: "coinflip",
  aliases: ["cf", "coin"],
  permissions: [],
  cooldown: 0,
  description: "Atira a moeda ao ar 😴",
  premium: false,
  premiumguild: false,
  owner: false,

  execute(Client, msg, args, Discord) {
    let random = Math.floor(Math.random() * Math.floor(2));
    if (args[0]) return msg.channel.send({ content: `Usa ${Prefix}cf` });
    if (random === 1){
      ladomoeda = "Coroa"
    }else{
      ladomoeda = "Cara"
    }
    cfembed(Client, msg, args, Discord, ladomoeda)

  },
};
