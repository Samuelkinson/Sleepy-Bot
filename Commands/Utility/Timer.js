const ms = require('ms')
const Prefix  = require('../../config.json').prefix
const { StartTimer, EndTimer } = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/Timer')

module.exports = {
    name: 'timer' ,
    aliases: ['setimer', 'alarme', 'alarm'],
    permissions: ['SEND_MESSAGES'],
    cooldown: 0,
    description: `Sets an alarm | ${Prefix} timer <time> <reason>`,
    execute(Client, msg, args, Discord) {
        let time = args[0]
        if(!time) return msg.reply({content: `Escreve ${Prefix} timer <time> <reason>`})
        if(ms(time) > ms('1d')) return msg.reply({content: 'o alarme não pode ser maior que 1 dia'})
        
        let reason = args.slice(1).join(' ')
        if(!reason) return msg.reply({content: 'Qual é a razão do timer?'})
        if(isNaN(ms(time))) return msg.reply({content: 'Formato de tempo inválido'})
      
        StartTimer(Client, Discord, msg, time, reason)
       
        setTimeout(() =>{
            EndTimer(Client, Discord, msg, time, reason)
        },ms(time))
    }
}