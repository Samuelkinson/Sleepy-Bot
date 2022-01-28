const Prefix = require('../../Config.json').prefix

module.exports = {
    name: 'echo' ,
    aliases: ['say'],
    permissions: [],
    cooldown: 5,
    description: 'Faz o bot dizer algo no canal especificado',
    async execute(Client, msg, args, Discord) {

        
        const messageToSay = args.join(" ")
        if(!messageToSay[0]) return  msg.channel.send({content:`Usa ${Prefix}echo "algo"`});

        
        const sayEmbed = new Discord.MessageEmbed()
            .setColor('#ff748c') 
            .addFields(
                {name: ` ${msg.author.tag} quer dizer:`, value: `${messageToSay}`, inline: true},
                )
            .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format :'png'}))
            msg.channel.send({embeds:[sayEmbed]}).then(msg.delete());

    }
}