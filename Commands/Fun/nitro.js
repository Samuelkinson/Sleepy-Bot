const Prefix = require('../../Config.json').prefix
const nitro = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/discordnitroembed')

module.exports = {
    name: 'nitro' ,
    aliases: ['nitro', 'freenitro'],
    permissions: [],
    cooldown:0,
    description: 'Totaly Real Free nitro',
    execute(Client, msg, args, Discord) {

        if(args[0]) return  msg.channel.send({content:`Usa ${Prefix}nitro`});
        return nitro(Client, msg, args, Discord)

    }
}