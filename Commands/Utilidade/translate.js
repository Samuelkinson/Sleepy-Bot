const translate = require("translate-google");
const Prefix = require("../../config.json").prefix;

module.exports = {
  name: "tt",
  aliases: ['traduz'],
  permissions: [],
  cooldown: 0,
  description: `Traduz todas as linguagens😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {
    try {
      if (args.length < 2) {
        msg.reply(
          `Formato errado: Um exemplo seria "${Prefix}tt korean "texto-em-qualquer-idioma"` 
        );
      } else {
        let translateTo = args[0].toLowerCase(); //Language to Translate to
        let text = args.slice(1).join(" "); //Text to Translate

        translate(text, { to: translateTo })
          .then((res) => {
            msg.channel.send(res);
          })
          .catch((err) => {
            msg.channel.send("Ocorreu um erro!");
          });
      }
    } catch (err) {
      return msg.channel.send({content: `Tenta "${Prefix}tt korean "texto-em-qualquer-idioma"`});
    }
  },
};
