const items = require('../../Resources/EconomyItems');
const Emojis = require('../../Resources/Emojis.json').Emojis;

module.exports = {
    name: 'shop' ,
    aliases: ['loja'],
    permissions: [],
    cooldown: 0,
    description: 'Mostra a loja!',
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {
        if(items.length === 0) return msg.channel.send('Não temos stock!')
        const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
        let embed = new Discord.MessageEmbed()
         .setColor('#5d8aa8')
         .setTitle('🛒Loja Sleepy Bot') 
         .setImage(`https://64.media.tumblr.com/5e776d6e9950a1067e2e94e955347222/afb9606fc641d191-7c/s1280x1920/d2ea190f70fe9894f124f3925ff5cdb798b0460d.gifv`) 
         .setFooter({
            text: `Compra aqui os tens itens!`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
             })
         items.forEach((items) =>{
            embed.addField(`${Client.emojis.cache.get(items.emoji)}${items.item}`, `Preço: \`${items.price}\` ${SleepyEmoji}, Chance:\`${items.pct}%\``)
        })   
        return msg.channel.send({embeds:[embed]}) 
    }
}
