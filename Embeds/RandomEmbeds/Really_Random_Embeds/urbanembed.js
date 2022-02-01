module.exports = (Client, msg, args, Discord, answer, trim)  => {

    function trim(input){
        return input.length > 1024 ? `${input.slice(0, 1020)} ...`: input;
    }
    
    try {
        let embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addField('Definição', trim(answer.definition))
        /* .addField('Exemplo', trim(answer.example)) */
        /* .addField('Ratings')  */
        .addFields(
            {name: `Rating:`, value: `${answer.thumbs_up}👍`, inline: true},
            {name: `Rating:` , value: `${answer.thumbs_down}👎`, inline: true},
            )
        .setFooter({
            text:`Usei o Urban Dictionary`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})})
        msg.channel.send({embeds:[embed]})

    }catch(err) {
        msg.channel.send({content:`Não consegui encontrar`});
    }
}

