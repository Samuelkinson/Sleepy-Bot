const OwnerSchema = require('../../Schemas/Owner-Schema')

module.exports = {
    name: 'remove-owner' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Remove Owner',
    premium: false,
    premiumguild: false, 
    owner: true,
   
    async execute(Client, msg, args, Discord) {

    const member = msg.mentions.members.first()
    if(!member) return msg.channel.send('Preciso de um membro!')
    
    OwnerSchema.findOne({
        User: member.id,
    }, 
    async (err, data) =>{
        if(!data) return msg.channel.send(`\`${member.user.username}\` não tinha owner!`).then(msg.delete());
        data.delete();
        msg.channel.send(`\`${member.user.username}\` já não tem owner`).then(msg.delete());
        }
    )

    }
}