const schema = require('../../Schemas/Command-Schema')

module.exports = {
    name: 'desativar-comando' ,
    aliases: ['disable', 'desativar'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: `Desativa comandos😴`,
    async execute(Client, msg, args, Discord) {

        const cmd = args[0].toLowerCase();
        if(cmd === 'disable' || cmd === 'enable' ) return msg.channel.send('Não podes😴')
        if(!cmd) return msg.channel.send('Preciso de um comando😴')
        if(!!Client.commands.get(cmd) === false) return msg.channel.send('Comando não existe😴')
        schema.findOne({ Guild: msg.guild.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                if(data.Cmds.includes(cmd)) return msg.channel.send('Este comando já foi desligado.😴');
                data.Cmds.push(cmd)
            } else {
                data = new schema({
                    Guild: msg.guild.id,
                    Cmds: cmd,
                })
            }
            await data.save();
            msg.channel.send(`O comando ${cmd} foi desativado😴`)
        })
    } 
}