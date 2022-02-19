const SleepyCoinsSchema = require('../../Schemas/SleepyCoins-Shema')

module.exports = {
    name: 'add' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: '',
    premium: false,
    premiumguild: false,
    owner: true,
    async execute(Client, msg, args, Discord) {

        const member = msg.mentions.members.first()
        newcoins = parseInt(args[1])
        if(!member) return msg.channel.send('Preciso de um membro!')
        if(!args[1]) return msg.channel.send('Preciso de Sleepy Coins😴')

        SleepyCoinsSchema.findOne({
            id: member.id,
        }, async(err, data) =>{
            if (data) { 
                SleepyCoins = data.SleepyCoins + newcoins
                data.delete();
                let newData = new SleepyCoinsSchema({
                    id: member.id,
                    SleepyCoins: SleepyCoins,
                    })
                newData.save();
    
                return msg.channel.send(`Foram adicionadas \`${newcoins}\` Sleepy Coins😴 a \`${member.user.username}\``)
               
            } else {
                let newData = new SleepyCoinsSchema({
                    id: member.id,
                    SleepyCoins: newcoins
                })
                newData.save();
                return msg.channel.send(`Foram adicionadas \`${newcoins}\` Sleepy Coins😴 a \`${member.user.username}\``)
        }
        })
    }
}