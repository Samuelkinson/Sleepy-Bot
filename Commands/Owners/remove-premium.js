const PremiumSchema = require('../../Schemas/Premium-Schema')

module.exports = {
    name: 'remove-premium' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Remove Premium',
    premium: false,
    premiumguild: false, 
    owner: true,
   
    async execute(Client, msg, args, Discord) {

    const member = msg.mentions.members.first()
    if(!member) return msg.channel.send('Preciso de um membro!')
    
    PremiumSchema.findOne({
        User: member.id
    }, 
    async (err, data) =>{
        if(!data) return msg.channel.send(`\`${member.user.username}\`Não tinha premium!`).then(msg.delete());
        data.delete();
        msg.channel.send(`\`${member.user.username}\` já não tem premium`).then(msg.delete());
        }
    )

    }
}