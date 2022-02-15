const schema = require('../../Schemas/Command-Schema')

module.exports = {
    name: 'enable' ,
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: 'Ativa comandos😴',
    async execute(Client, msg, args, Discord) {

        const cmd = args[0];
        if(!cmd) return msg.channel.send('Preciso de um comando😴')
        if(!!Client.commands.get(cmd) === false) return msg.channel.send('Comando não existe😴')
        schema.findOne({ Guild: msg.guild.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
              if(data.Cmds.includes(cmd)) {
                  let commandNumber;

                  for (let i = 0; i < data.Cmds.length; i++) {
                      if(data.Cmds[i] === cmd) data.Cmds.splice(i, 1)
                  }

                  await data.save()
                  msg.channel.send(`Comando ${cmd} foi ativado!😴`)
              }  else return msg.channel.send('Commando já estava ativo😴')
          }
        })
    } 
}