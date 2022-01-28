const GuildSchema = require('../../Schemas/Guild-Schema')
module.exports = async (Discord, Client, member) =>{
  let data = await GuildSchema.findOne({
    GuildID: member.guild.id
  })
  if(!data.GoodbyeChannelId) return 
    
  let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true, format: 'png'}))
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setDescription(`:sob: **fdp** \n \n :coffin: **${member.user.username}** pôs-se no caralho`)
    .setFooter('Morre com doenças burro')
  
  return member.guild.channels.cache.get(data.GoodbyeChannelId).send({content : `<@${member.id}> \n`, embeds: [embed]})
}