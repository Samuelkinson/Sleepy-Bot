
module.exports = (Client, msg, args, Discord) =>{

        var randomemoji = ["💎", "🍋", "🔔", "🍒", "⭐", "7️"]
        let reponse = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse2 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse3 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse4 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse5 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse6 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse7 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse8 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])
        let reponse9 = (randomemoji[Math.floor(Math.random() * randomemoji.length)])

	    const embed = new Discord.MessageEmbed()
	        .setColor("#ff748c")
	        .setDescription(`**[ 🎰 ${msg.member} quer jogar slots! 🎰 ]**`)
	        .addField(`${reponse} ${reponse2} ${reponse3} `, `** **`)
            .addField(`${reponse4} ${reponse5} ${reponse6}**<** `, `** **`)
            .addField(`${reponse7} ${reponse8} ${reponse9}`, `** **`)
            .setFooter({
                text:`Comando Patrocinado por @SleepyBot 😴`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
	    msg.channel.send({embeds:[embed]}).then(msg.delete()) 
}