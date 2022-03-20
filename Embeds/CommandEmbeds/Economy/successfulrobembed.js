module.exports = (Client, msg, Discord, target, thief, theftamount) =>{
    let successfulmessages = [
        `${target} estava a dormir e foi roubado ${theftamount} Sleepy Coins 😴!`, 
        `${target} apostou num site ilegal e o dono do site roubou-lhe ${theftamount} Sleepy Coins 😴!`, 
        `${target} foi enganado por homens com sotaques duvidosos e perdeu ${theftamount} Sleepy Coins 😴a comprar antivirus`,
      ]
    let successfulmessage = (successfulmessages[Math.floor(Math.random() * successfulmessages.length)]);
    
    let embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle('Sleepy Bot Police relátorio do assalto!🕵️‍♂️')
        .setThumbnail(thief.displayAvatarURL({dynamic: true, format :'png'}))
        .addFields({name: `${thief.username} está foragido:`, value: successfulmessage, inline: true})
        .setFooter({
            text: `Bem jogado!😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
             })
    msg.channel.send({embeds:[embed]}) 
}

