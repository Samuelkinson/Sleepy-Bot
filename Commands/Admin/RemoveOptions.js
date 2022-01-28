const CommandNotFound = require('../../Embeds/Command/NoCommand')
const WelcomeChannel = require('./Remove/welcomeChannel')
const GoodbyeChannel = require('./Remove/goodbyeChannel')
const DefaultPrefix = require('../../config.json').prefix
const fs = require('fs')
const NoCommand = require('../../Embeds/Command/NoCommand')

module.exports = {
    name: 'remove' ,
    aliases: ['retira'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 1,
    description: 'Remove options that have been set previously',
    execute(Client, msg, args, Discord) {
        if(args.length > 1) return CommandNotFound(msg, Discord, Client, DefaultPrefix)
        const SetCommandArguments = []
        const SetCommandArgumentsDark = []

        fs.readdirSync('./commands/Admin/Remove/').forEach(FileName =>{
            const arguments = fs.readdirSync(`./Commands/Admin/Remove/`).filter(file => file.endsWith('.js'));       
            let name = FileName.replace('.js', '').toLowerCase();

            const DarkNames = `\`${name}\``
            SetCommandArgumentsDark.push(DarkNames)
            SetCommandArguments.push(name)
        });

        if(!args[0]){
            let setEmbed = new Discord.MessageEmbed()
            .setTitle(`Lista de Opções para o comando Remove`)
            .addField('📝 Opções Disponíveis', `${SetCommandArgumentsDark.join(' ').toString()}`)
            .setColor('#ffff00')

            msg.channel.send({embeds: [setEmbed]})
        }else{
            const cmd = args[0].toLowerCase(); 
                  
            if(cmd === SetCommandArguments[0]) return GoodbyeChannel(msg, Discord)
            if(cmd === SetCommandArguments[1]) return WelcomeChannel(msg, Discord)
            
            if(SetCommandArguments.indexOf(cmd) == -1) return NoCommand(msg, Discord, Client, DefaultPrefix)
        }
    }
}