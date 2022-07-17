module.exports = {
    name: 'ban',
    aliases: ['b', 'banir', 'xau'],
    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS',],
    cooldown: 0,
    description: `Banir um membro do servidor😴`,
    async execute(Client, msg, args, Discord) {
        const mentionMember = msg.mentions.members.first();
        let reason = args.slice(1).join(' ');

        if (!args[0]) return msg.channel.send({ content: 'Quem desejas banir?' })
        if (!reason) return msg.channel.send({ content: 'Tens que dar uma razão antes de banir alguém' });
        if (!mentionMember) return msg.channel.send({ content: 'Não existe ninguém com esse nome no servidor' })
        if (!mentionMember.bannable) return msg.channel.send({ content: `Não consigo bannir "${mentionMember.user.tag}"` })

        const BanDmEmbed = new Discord.MessageEmbed()
            .setTitle(`Foste bannido do servidor **${msg.guild.name}**`)
            .setDescription(`**Razão:**  \`${reason}\``)
            .setColor('#ffff00')
            .setFooter(Client.user.tag, Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))

        const BanServerEmbed = new Discord.MessageEmbed()
            .setTitle(`${mentionMember.user.tag} Levou com o Ban Hammer`)
            .setThumbnail(mentionMember.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
            .setDescription(`**Razão:**  \`${reason}\``)
            .setColor('#ffff00')
        try{
            await mentionMember.send({ embeds: [BanDmEmbed] });
        }catch(err){console.log(err)} 
        try{
            await mentionMember.ban({
                reason: reason
            }).then(() => msg.channel.send({ embeds: [BanServerEmbed] }))
        }catch(err){console.log(err)} 
    }
}
