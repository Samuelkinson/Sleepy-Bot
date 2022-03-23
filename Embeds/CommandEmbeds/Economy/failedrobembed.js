module.exports = (Client, msg, Discord, target, thief) =>{
    let failedrobmessages = [
        `Tropeças-te ao tentar roubar **${target.user.username}** foste apanhado pela SBP! `,
        `**${target.user.username}** deu -te com o canhão da raposa!`,
        `Sleepy Bot Police apanhou-te a meio do roubo, **${target.user.username}** foi salvo pela SBP`,
        `Não dormiste como deve de ser, chegaste ao local do roubo e adormeceste, **${target.user.username}** chamou o Sleepy Bot para te prender!`
      ]
    let failedmessage = (failedrobmessages[Math.floor(Math.random() * failedrobmessages.length)]);
    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Sleepy Bot Police relátorio do assalto!🕵️‍♂️')
        .setThumbnail(thief.displayAvatarURL({dynamic: true, format :'png'}))
        .addFields({name: `${thief.username} foi apanhado devido ao seguinte motivo:`, value: failedmessage, inline: true})
        .setFooter({
            text: `FOSTE APANHADO!😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
             })
    msg.channel.send({embeds:[embed]}) 
}

