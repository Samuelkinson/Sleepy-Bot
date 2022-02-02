module.exports = (Client, msg, args, Discord, summary)=>{
    
    function trim(input){
        return input.length > 1024 ? `${input.slice(0, 1020)} ...`: input;
    }

    let standardembed = new Discord.MessageEmbed()
    .setColor('#37dc0c')
    .setTitle(summary.title)
    .setThumbnail(summary.thumbnail.source)
    .addField('📘Short Description: ', trim(summary.description))
    .addField('📚Extended Description: ', trim(summary.extract))
    .setURL(summary.content_urls.desktop.page) 
    .setFooter({
            text: `Click on the title to go to the Wikipédia page😴💤`,  
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        })

   msg.channel.send({embeds:[standardembed]}) 


}