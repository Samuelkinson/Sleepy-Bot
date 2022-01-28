 const googleIt = require('google-it') 

module.exports = {
    name: 'google' ,
    aliases: ['git','googleit'],
    permissions: [],
    cooldown: 60,
    description: 'Search anything on google!',
    async execute(Client, msg, args, Discord) {

        let embed = new Discord.MessageEmbed()
        .setTitle("Resultados da procura do google")
        .setColor('#37dc0c')
        .setTimestamp()
        .setFooter(`Clica no link😴`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))    

    googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        
        msg.channel.send({embeds:[embed]})

    }).catch(e => {
        console.warn("Error while attempting to search Google. " + e + " " + Date.now());
		msg.reply("Ocorreu um erro");
    });


    }
}

