module.exports = (Client, msg, args, Discord, summary)=>{

    let disambiguationembed = new Discord.MessageEmbed()
                .setColor('#37dc0c')
                .setTitle(summary.title)
                .addField('📚Tópicos referidos pelo mesmo termo :', summary.titles.normalized)
                .setURL(summary.content_urls.desktop.page)
                .setFooter({
                        text:`Comando Patrocinado por @SleepyBot 😴`,   
                        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
                    })

    msg.channel.send({embeds:[disambiguationembed]}) 
}