const trim = require('../../../Resources/trimfunction')

module.exports = (Client, msg, args, Discord, answer)  => {  

    try {
        let embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addField('📔Definição',trim.trimtext((answer.definition)))
        .addField('📖Exemplo', trim.trimtext((answer.example)))
        .addField('🏆Aprovação: :', `
        **${answer.thumbs_up}** 👍
        **${answer.thumbs_down}** 👎`, false)

        .setFooter({
                text:`Comando Patrocinado por @SleepyBot 😴`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        })
        
        msg.channel.send({embeds:[embed]}).then(msg.delete()) 

    }catch(err) {
        console.log(err)
        msg.channel.send({content:`Não consegui encontrar`});
    }
}

