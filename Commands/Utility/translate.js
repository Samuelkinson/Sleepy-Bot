const translate = require('translate-google')

module.exports = {
    name: 'traduz' ,
    aliases: ['translate', 'ttpt'],
    permissions: [],
    cooldown: 0,
    description: 'Traduz para português',
    async execute(Client, msg, args, Discord) {   

        translate(args.join(" "), {to : 'pt'}).then(res => {
            msg.channel.send(res)
        }).catch(err => {
            msg.channel.send('Um erro aconteceu')
            console.log(err)
        })
    }
}