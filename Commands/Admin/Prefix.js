const DefaultPrefix  = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

module.exports = {
    name: 'prefix' ,
    aliases: ['pre', 'prefixo'],
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    cooldown: 5,
    description: `Muda o prefixo do servidor 😴`,
    async execute(Client, msg, args, Discord) {

        const data = await GuildSchema.findOne({
            GuildID: msg.guild.id
        });
        
        if (!args[0]) return msg.channel.send('You must provide a **new prefix**!');
        if (args[0].length > 5) return msg.channel.send('Your new prefix must be under \`5\` characters!')

        if (data) {
            await GuildSchema.findOneAndRemove({
                GuildID: msg.guild.id
            })
            
            msg.channel.send(`The new prefix is now **\`${args[0]}\`**`);
    
            let newData = new GuildSchema({
                guildName: msg.guild.name,
                GuildID: msg.guild.id,
                prefix:  args[0].toLowerCase(), 
                
            })
            newData.save();
        } else if (!data) {
            msg.channel.send(`The new prefix is now **\`${args[0]}\`**`);
    
            let newData = new GuildSchema({
                guildName: msg.guild.name,
                GuildID: msg.guild.id,
                prefix: args[0].toLowerCase(), 
            })
            newData.save();
        }
    }
}