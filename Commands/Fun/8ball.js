module.exports = {
    name: '8ball' ,
    aliases: ['8b', ],
    permissions: [],
    cooldown: 8,
    description: '8ball Command',
    async execute(Client, msg, args, Discord) {
        if(!args[0]) return msg.reply('Preciso de uma pergunta!')
        let replies = ['Sim', 'Não', 'Parece-me bem', 'Parece-me mal', 'Melhor não te contar', 'Definitivamente','Gosto da ideia', 'Não me parece']

        let result = Math.floor((Math.random() * replies.length))
        let question = args.slice(0).join(` `)

        let ballEmbed = new Discord.MessageEmbed()
        .setTitle( `🎱 ${msg.author.username}`)
        .setColor('#000000') 
        .addField(`Questão`, question)
        .addField(`Resposta Gloriosa `, replies[result])
    
        msg.channel.send({embeds: [ballEmbed]}).then(msg.delete());
    
    }
}