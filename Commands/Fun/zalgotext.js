const zalgo = require("to-zalgo")

module.exports = {
    name: 'zalgo' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Cria texto z̛̮̈aͦ͛̄l̑̄͆g̈͊͂ō̽̌😴',
    async execute(Client, msg, args, Discord) {

        if(!args[0]) return msg.reply('Preciso de texto')
        
        zalgotext = zalgo(args.join(" "))
        msg.channel.send(zalgotext).then(msg.delete())
    }
}