const Prefix  = require('../../config.json').prefix
module.exports = {
    name: 'expulsar' ,
    aliases: ['expulsa', 'k', 'kick'],
    permissions: ['ADMINISTRATOR', 'KICK_MEMBERS',],
    cooldown: 0,
    description: `Kick a uma pessoa do servidor😴`,
    async execute(Client, msg, args, Discord) {
        const mentionMember = msg.mentions.members.first();
        let reason = args.slice(1).join(' ');
        
        if(!args[0]) return msg.channel.send({content: 'Quem desejas kickar?'})
        if(!reason) return msg.channel.send({content: 'Tens que dar uma razão antes de expulsar alguém'});
        if(!mentionMember) return  msg.channel.send({content: 'Não existe ninguém com esse nome no servidor'})
        if(!mentionMember.kickable) return msg.channel.send({content: `Não consigo kickar "${mentionMember.user.username}"`})

        const KickDmEmbed = new Discord.MessageEmbed()
        .setTitle(`Foste kickado do servidor **${msg.guild.name}**`)
        .setDescription(`**Razão:**  \`${reason}\``)
        .setColor('RANDOM')
        .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))

        const KickServerEmbed = new Discord.MessageEmbed()
        .setTitle(`${mentionMember.user.username} foi Kickado do servidor`)
        .setThumbnail(mentionMember.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
        .setDescription(`**Razão:**  \`${reason}\``)
        .setColor('RANDOM')
        
        msg.channel.send(KickServerEmbed)
        try{
            await mentionMember.send({embeds: [KickDmEmbed]})
        }catch(err){console.log(err)} 

        try{
            await mentionMember.kick({reason: reason})
        }catch(err){
            return msg.channel.send({content: 'Não consegui kickar'})
        } 
    
    }
}
