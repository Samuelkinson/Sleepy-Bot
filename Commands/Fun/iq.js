
module.exports = {
    name: 'iq' ,
    aliases: ['qi'],
    permissions: [],
    cooldown: 0,
    description: 'Teste de QI',
    async execute(Client, msg, args, Discord) {

    try {
        const iq = Math.floor(Math.random() * 226);
        const mentionMember = msg.mentions.members.first();
        const embedauthor = new Discord.MessageEmbed()
        .setTitle(":brain: Teste de QI:")
        .setDescription(":bulb: " + msg.author.username + " QI: `" + iq + "`")
        .setColor(`#ff748c`)
        

     if(!args[0]) return msg.channel.send({embeds:[embedauthor]}).then(msg.delete());

     const embedmentionmember = new Discord.MessageEmbed()
        .setTitle(":brain: Teste de QI:")
        .setDescription(":bulb: " + mentionMember.user.username + " QI: `" + iq + "`")
        .setColor(`#ff748c`)
        
     if(mentionMember) return msg.channel.send({embeds:[embedmentionmember]}).then(msg.delete());

        } catch (err) {
          return msg.channel.send({content:'Não encontrei'}).then(msg.delete());
        }}
  }
   