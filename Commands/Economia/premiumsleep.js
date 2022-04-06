const locations = require('../../Embeds/CommandEmbeds/Economy/Locationrandom')
const iten = require('../../Embeds/CommandEmbeds/Economy/Itenpercentage')

module.exports = {
  name: "premiumsleep",
  aliases: ['psleep','pdormir', 'pmimir'],
  permissions: [],
  cooldown: 0,
  description: `Dorme para ganhar itens `,
  premium: true,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {

     msg.channel.send(`Adormeceste ${locations()} e recebeste \`${iten()}\``); 
  },
};
