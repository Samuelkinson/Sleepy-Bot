
module.exports = (Client, msg, args, Discord) =>{

        var replys1 = [
            ":gem: : :gem: : :gem: ",
            ":lemon: : :lemon: : :lemon: ",
            ":seven: : :seven: : :seven: ",
            ":bell: : :bell: : :bell:",
            ":cherries: : :cherries: : :cherries: ",
            ":star: : :star: : :star: ",
            ":gem: : :star: : :seven: ",
            ":star: : :bell: : :bell:",
            ":star: : :star: : :cherries: ",
            ":gem: : :gem: : :cherries:",
            ":gem: : :seven: : :seven: ",
            ":star: : :bell: : :lemon: ",
            ":star: : :star: : :cherries: ",
            ":seven: : :star: : :star: ",
            ":star: : :star: : :seven: ",
            ":gem: : :gem: : :seven: "
        ];
        
        var replys2 = [
            ":gem: : :gem: : :gem: ",
            ":lemon: : :lemon: : :lemon: ",
            ":seven: : :seven: : :seven: ",
            ":bell: : :bell: : :bell:",
            ":cherries: : :cherries: : :cherries: ",
            ":gem: : :star: : :seven: ",
            ":star: : :bell: : :bell:",
            ":star: : :star: : :cherries: ",
            ":gem: : :gem: : :cherries:",
            ":gem: : :seven: : :seven: ",
            ":star: : :bell: : :lemon: ",
            ":star: : :star: : :cherries: ",
            ":seven: : :star: : :star: ",
            ":star: : :star: : :seven: ",
            ":gem: : :gem: : :seven: ",
            ":gem: : :cherries: : :cherries:",
            ":gem: : :bell: : :star:"
        ];
        
        var replys3 = [
            ":lemon: : :lemon: : :lemon: ",
            ":bell: : :bell: : :bell:",
            ":cherries: : :cherries: : :cherries: ",
            ":star: : :star: : :star: ",
            ":gem: : :star: : :seven: ",
            ":star: : :bell: : :bell:",
            ":star: : :star: : :cherries: ",
            ":gem: : :gem: : :cherries:",
            ":gem: : :seven: : :seven: ",
            ":star: : :bell: : :lemon: ",
            ":star: : :star: : :cherries: ",
            ":seven: : :star: : :star: ",
            ":star: : :star: : :seven: ",
            ":gem: : :gem: : :seven: "
        ];

        let reponse = (replys1[Math.floor(Math.random() * replys1.length)])
        let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
        let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

	    const embed = new Discord.MessageEmbed()
	        .setColor("#ff748c")
	        .setDescription(`**[ 🎰 ${msg.member} quer jogar slots! 🎰 ]**`)
	        .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
	    msg.channel.send({embeds:[embed]})
}