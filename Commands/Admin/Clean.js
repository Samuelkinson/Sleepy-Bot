const Prefix  = require('../../config.json').prefix

module.exports = {
    name: 'clean',
    aliases:['limpa', 'l', 'c', 'purge', 'clear','p'],
    cooldown: 0,
    permissions:['ADMINISTRATOR','MANAGE_MESSAGES'],
    description: `Cleans the channel you send the message to | ${Prefix} clean <NumberOfMsgs> (max: 100)`,
      async  execute(Client, msg, args, Discord) {
            let amount = args[0]

            if(!amount) return msg.reply({content: 'Introduza quantas mensagens deseja apagar?'})
            if(isNaN(amount) || amount > 100 || amount < 2 ) return msg.channel.send({content: 'Introduz um número de 2 a 100 '})

           await msg.channel.bulkDelete(amount).catch((error)=>{
            return msg.channel.send('Não consigo apagar mensagens com mais de 14 dias')})
        }
    }