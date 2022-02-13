
module.exports = (Client, msg, args, Discord) =>{

        var replys1 = [
            "💎 : 💎 : 💎 ",
            "🍋 : 🍋 : 🍋 ",
            "7️ : 7️ : 7️ ",
            "🔔 : 🔔 : 🔔",
            "🍒 : 🍒 : 🍒 ",
            "⭐ : ⭐ : ⭐ ",
            "💎 : ⭐ : 7️ ", 
            "⭐ : 🔔 : 🔔",
            "⭐ : ⭐ : 🍒 ",
            "💎 : 💎 : 🍒",
            "💎 : 7️ : 7️ ",
            "⭐ : 🔔 : 🍋 ",
            "⭐ : ⭐ : 🍒 ",
            "7️ : ⭐ : ⭐ ",
            "⭐ : ⭐ : 7️ ",
            "💎 : 💎 : 7️ "
        ];
        
        var replys2 = [
            "💎 : 💎 : 💎 ",
            "🍋 : 🍋 : 🍋 ",
            "7️ : 7️ : 7️ ",
            "🔔 : 🔔 : 🔔",
            "🍒 : 🍒 : 🍒 ",
            "💎 : ⭐ : 7️ ",
            "⭐ : 🔔 : 🔔",
            "⭐ : ⭐ : 🍒 ",
            "💎 : 💎 : 🍒",
            "💎 : 7️ : 7️ ",
            "⭐ : 🔔 : 🍋 ",
            "⭐ : ⭐ : 🍒 ",
            "7️ : ⭐ : ⭐ ",
            "⭐ : ⭐ : 7️ ",
            "💎 : 💎 : 7️ ",
            "💎 : 🍒 : 🍒",
            "💎 : 🔔 : ⭐"
        ];
        
        var replys3 = [
            "🍋 : 🍋 : 🍋 ",
            "🔔 : 🔔 : 🔔",
            "🍒 : 🍒 : 🍒 ",
            "⭐ : ⭐ : ⭐ ",
            "💎 : ⭐ : 7️ ",
            "⭐ : 🔔 : 🔔",
            "⭐ : ⭐ : 🍒 ",
            "💎 : 💎 : 🍒",
            "💎 : 7️ : 7️ ",
            "⭐ : 🔔 : 🍋 ",
            "⭐ : ⭐ : 🍒 ",
            "7️ : ⭐ : ⭐ ",
            "⭐ : ⭐ : 7️ ",
            "💎 : 💎 : 7️ "
        ];

        let reponse = (replys1[Math.floor(Math.random() * replys1.length)])
        let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
        let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

	    const embed = new Discord.MessageEmbed()
	        .setColor("#ff748c")
	        .setDescription(`**[ 🎰 ${msg.member} quer jogar slots! 🎰 ]**`)
	        .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
            .setFooter({
                text:`Comando Patrocinado por @SleepyBot 😴`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
	    msg.channel.send({embeds:[embed]}).then(msg.delete()) 
}