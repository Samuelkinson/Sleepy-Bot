const trim = require('../../../../Resources/trimfunction')

module.exports = (Client, msg, args, Discord, summary)=>{
    
    let standardembed = new Discord.MessageEmbed()
    .setColor('#37dc0c')
    .setTitle(summary.title)
    .setThumbnail(summary.thumbnail.source)
    .addField('📘Descrição curta: ', trim.trimtext((summary.description)))
    .addField('📚Descrição Longa: ', trim.trimtext((summary.extract)))
    .setURL(summary.content_urls.desktop.page) 
    .setFooter({
        text:`Comando Patrocinado por @SleepyBot 😴`,     
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        })

   msg.channel.send({embeds:[standardembed]}) 

}