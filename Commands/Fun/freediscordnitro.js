const Prefix = require('../../Config.json').prefix

module.exports = {
    name: 'nitro' ,
    aliases: ['nitro', 'freenitro'],
    permissions: [],
    cooldown:0,
    description: 'Totaly Real Free nitro',
    execute(Client, msg, args, Discord) {

        if(args[0]) return  msg.channel.send({content:`Usa ${Prefix} nitro`});
        const member = msg.mentions.members.first() || msg.member

        let embed = new Discord.MessageEmbed()
            .setColor('#ff748c')
            .setTitle('Discord nitro grátis:tada:')
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .addFields(
            {name: 'Nitro grátis :partying_face:', value: `\*\*${member.user.username},\*\* clica [aqui](https://goo.gl/CWqeBF)`, inline: true},
            )
            .setFooter(`Nunca te entregarei!`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))
            msg.channel.send({embeds: [embed]})

    }
}