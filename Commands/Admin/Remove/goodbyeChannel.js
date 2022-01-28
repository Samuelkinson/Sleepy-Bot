const GuildSchema = require("../../../Schemas/Guild-Schema")

module.exports = async (msg, Discord) =>{
    let RemoveGoodbyeChannelEmbed = new Discord.MessageEmbed()
    .setColor('#ffff00')
    .setAuthor(`${msg.author.tag} removeu o goodbye channel do servidor!`, msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setDescription(`Channel removido: \`${msg.channel.name}\``)

    let data = await GuildSchema.findOne({
        GuildID: msg.guild.id
    })
    if(!data){
        msg.channel.send('Não há nada para remover puto estúpido')
    }else{
        let data = await GuildSchema.findOne({
            GuildID: msg.guild.id
        })
        if(data){
            await GuildSchema.findOneAndUpdate(
                {GoodbyeChannelId: msg.channel.id}, 
                {$unset: {GoodbyeChannelId: 1}} , (err =>{
                    if(err) return console.log(err)
                })
            )
        }
        
        if(!data.WelcomeChannelId) return msg.reply('Não há nada para remover puto estúpido')
        msg.channel.send({embeds: [RemoveGoodbyeChannelEmbed]})
    }
}