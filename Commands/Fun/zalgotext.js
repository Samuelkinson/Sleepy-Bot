const zalgo = require("to-zalgo")
const trim = require('../../Resources/trimfunction')
module.exports = {
    name: 'zalgo' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Cria texto z̛̮̈aͦ͛̄l̑̄͆g̈͊͂ō̽̌😴',
    premium: false,
    premiumguild: false, 
    owner: false,
    async execute(Client, msg, args, Discord) {

        if(!args[0]) return msg.reply('Preciso de texto')
        zalgotext = zalgo(args.join(" "))
        msg.channel.send(trim.trimtext(zalgotext)).then(msg.delete()) 
    }
}