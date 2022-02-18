 const googleIt = require('google-it') 

module.exports = {
    name: 'google' ,
    aliases: ['git','googleit'],
    permissions: [],
    cooldown: 0,
    description: 'Não sabes? Pergunta ao google! 😴',
    premium: false,
    premiumguild: false, 
    owner: false,
    async execute(Client, msg, args, Discord) {

        let embed = new Discord.MessageEmbed()
        .setTitle("Resultados da procura do google:")
        .setColor('#37dc0c')
        .setTimestamp()
        .setFooter({      
        text:`Clica no link😴`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})})

    googleIt({
        query: args.join(' '),
        disableConsole: true,
        limit: 5 
        }).then(results => {
        results.forEach(function(item, index) {
        embed.addField((index + 1) + ": " + item.title,  item.link);
        });
        
        msg.channel.send({embeds:[embed]}).then(msg.delete()) 

    }).catch(e => {
        console.warn("Error while attempting to search Google. " + e + " " + Date.now());
		msg.reply("Ocorreu um erro");
    });


    }
}

