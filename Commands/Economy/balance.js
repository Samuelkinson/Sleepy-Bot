const SleepyCoinsSchema = require('../../Schemas/SleepyCoins-Shema')
const SleepyCoinsEmbed = require('../../Embeds/CommandEmbeds/Economy/sleepycoins')

module.exports = {
    name: 'sleepycoins' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: '',
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

        const member = msg.mentions.members.first()
        if(!member) return msg.channel.send('Preciso de um membro!')

        SleepyCoinsSchema.findOne({
            id: member.id,
        }, async(err, data) =>{
            if(data){
                let SleepyCoins = data.SleepyCoins
                SleepyCoinsEmbed(Client, msg, SleepyCoins, member, Discord)
            }else{
                let newData = new SleepyCoinsSchema({
                    id: member.id,
                    SleepyCoins: 0
                })
                newData.save();
                return msg.channel.send(`\`${member.user.username}\` não tinha Sleepy Coins😴, foram te adicionadas \`0\``)
            }
        })
    }}