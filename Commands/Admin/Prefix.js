const DefaultPrefix  = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

module.exports = {
    name: 'prefixo' ,
    aliases: ['pre', 'prefix'],
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    cooldown: 5,
    description: `Muda o prefixo que é utilizado no servidor 😴`,
    async execute(Client, msg, args, Discord) {


        if (!args[0]) return msg.channel.send(' Preciso de um **novo prefixo**! ');
        if (args[0].length > 5) return msg.channel.send('O novo prefixo deve ser menor do que \`5\` caracteres! ')
        GuildSchema.findOne(
            {
                GuildID: msg.guild.id
            }, async(err, data) => {
                if (data) {
                    msg.channel.send(`O novo prefixo é **\`${args[0]}\`**`);
                    data.guildName = msg.guild.name,
                    data.prefix = args[0].toLowerCase(),    
                    data.save();    
                } else if (!data) {
                    msg.channel.send(`O novo prefixo é  **\`${args[0]}\`**`);
                    let newData = new GuildSchema({
                        guildName: msg.guild.name,
                        GuildID: msg.guild.id,
                        prefix: args[0].toLowerCase(), 
                    })
                    newData.save();
                }
            });
       
    }
}