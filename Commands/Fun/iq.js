const authorqiembed = require('../../Embeds/RandomEmbeds/IQ_embeds/authorqi')
const mentionMemberembed = require('../../Embeds/RandomEmbeds/IQ_embeds/mentionmemberqi')

module.exports = {
    name: 'iq' ,
    aliases: ['qi'],
    permissions: [],
    cooldown: 0,
    description: 'Teste de QI',
    async execute(Client, msg, args, Discord) {

    const mentionMember = msg.mentions.members.first();

    try {

     if(!args[0]) return  authorqiembed(Client, msg, args, Discord)
     if(mentionMember) return mentionMemberembed(Client, msg, args, Discord)

        } catch (err) {
          return msg.channel.send({content:'Não encontrei'}).then(msg.delete());
        }}
  }
   