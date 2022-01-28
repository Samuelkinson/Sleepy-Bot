module.exports = {
    name: 'invite' ,
    aliases: ['inv', 'convida', 'convite'],
    permissions: ['CREATE_INSTANT_INVITE', 'EMBED_LINKS', 'SEND_MESSAGES'],
    cooldown: 120,
    description: 'Creates an invite for the server',
    execute(Client, msg, args, Discord) {
        let channel = msg.channel;
        channel.createInvite({unique: true})
        .then(invite =>{
            let InviteEmbed = new Discord.MessageEmbed()
            .setTitle( `\`${msg.author.username}\`` + 'Quer um link de convite')
            .addField('**Link do Convite**', 'https://discord.gg/' + invite.code)
            .setColor('#a35ecc')
            .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
            .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
            .setTimestamp()

            return msg.reply({embeds: [InviteEmbed]})
        })
    }
}