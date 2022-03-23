const Coingif = require('../../../Resources/Emojis.json').Emojis

module.exports = (Client, msg, args, Discord, ladomoeda) =>{
    const Coin = Client.emojis.cache.get(Coingif.Coin);
    let embed = new Discord.MessageEmbed()
    .setColor('#ff748c')
    .setThumbnail(`https://i.kym-cdn.com/photos/images/newsfeed/000/930/669/59e.gif`)
    .addFields({name: 'Lado da moeda:', value: `**${ladomoeda}**${Coin}`, inline: true})
  msg.channel.send({embeds:[embed]})
}