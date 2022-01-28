const GuildSchema = require("../../../Schemas/Guild-Schema")
const DefaultPrefix = require('../../../config.json').prefix

module.exports = async (msg, Discord) =>{
    let SetWelcomeChannelEmbed = new Discord.MessageEmbed()
    .setColor('#FF9900')
    .setAuthor(`${msg.author.tag} mudou o welcome channel do servidor!`, msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setDescription(`O Novo channel é: \`${msg.channel.name}\``)

    let data = await GuildSchema.findOne({
        GuildID: msg.guild.id
    })
    if(!data){
        let newdata = await GuildSchema.create({
            GuildID: msg.guild.id,
            guildName: msg.guild.name,
            prefix: DefaultPrefix,
            WelcomeChannelId: msg.channel.id,
        })
        newdata.save()
        msg.channel.send({embeds: [SetWelcomeChannelEmbed]})
    }else{
        let data = await GuildSchema.findOneAndUpdate({
            GuildID: msg.guild.id,
            guildName: msg.guild.name,
            WelcomeChannelId: msg.channel.id,
        })
    
        if(data.WelcomeChannelId === msg.channel.id) return msg.channel.send('Este já é o welcome channel do servidor, se quiseres mudar usa o comando noutro text channel')
        msg.channel.send({embeds: [SetWelcomeChannelEmbed]})
    }
}