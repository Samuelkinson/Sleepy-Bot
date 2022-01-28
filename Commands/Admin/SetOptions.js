const CommandNotFound = require('../../Embeds/Command/NoCommand')
const WelcomeChannel = require('./Set/welcomeChannel')
const GoodbyeChannel = require('./Set/goodbyeChannel')
const DefaultPrefix = require('../../config.json').prefix
const fs = require('fs')
const NoCommand = require('../../Embeds/Command/NoCommand')

module.exports = {
    name: 'set' ,
    aliases: ['define'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 1,
    description: 'Used to set some server configs',
    execute(Client, msg, args, Discord) {
        if(args.length > 1) return CommandNotFound(msg, Discord, Client, DefaultPrefix)
        const SetCommandArguments = []
        const SetCommandArgumentsDark = []

        fs.readdirSync('./commands/Admin/Set/').forEach(FileName =>{
            const arguments = fs.readdirSync(`./Commands/Admin/Set/`).filter(file => file.endsWith('.js'));       
            let name = FileName.replace('.js', '').toLowerCase();

            const DarkNames = `\`${name}\``
            SetCommandArgumentsDark.push(DarkNames)
            SetCommandArguments.push(name)
        });

        if(!args[0]){
            let setEmbed = new Discord.MessageEmbed()
            .setTitle(`Lista de Opções para o comando Set`)
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