const translate = require('translate-google')

module.exports = {
    name: 'traduzeng' ,
    aliases: ['translateeng', 'tteng'],
    permissions: [],
    cooldown: 0,
    description: 'Translate to english',
    async execute(Client, msg, args, Discord) {   

        translate(args.join(" "), {to : 'en'}).then(res => {
            msg.channel.send(res)
        }).catch(err => {
            msg.channel.send('An error has occured')
            console.log(err)
        })
    }
}