const superagent = require("snekfetch");

module.exports = {
    name: 'baka' ,
    aliases: ['estupido', 'idiota', 'idiot'],
    permissions: [],
    cooldown: 0,
    description: 'Gif a chamar alguem de estúpido',
    execute(Client, msg, args, Discord) {

    superagent.get('https://nekos.life/api/v2/img/baka')
    .end((err, response) => {

     /* console.log(response.body.url) */

      const embed = new Discord.MessageEmbed()
      .setTitle("BAKA!!!")
      .setImage(response.body.url)
      .setColor(`#ff748c`)
      .setFooter(`Weeb alert!`)
      .setURL(response.body.url);

    msg.channel.send({embeds: [embed]}).then(msg.delete());

    }).catch((err) => message.channel.send('Opsy deu errado'));

    }
}
  