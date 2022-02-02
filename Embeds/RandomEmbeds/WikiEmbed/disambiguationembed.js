module.exports = (Client, msg, args, Discord, summary)=>{

    let disambiguationembed = new Discord.MessageEmbed()
                .setColor('#37dc0c')
                .setTitle(summary.title)
                .addField('📚Topics referred to by the same term:', summary.titles.normalized)
                .setURL(summary.content_urls.desktop.page)
                .setFooter({
                        text: `Click on the title to go to the Wikipédia page😴💤`,  
                        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
                    })

    msg.channel.send({embeds:[disambiguationembed]}) 
}