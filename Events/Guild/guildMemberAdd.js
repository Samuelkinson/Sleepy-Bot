const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, member) =>{
    let data = await GuildSchema.findOne({
      GuildID: member.guild.id
    })
    if(!data.WelcomeChannelId) return 
    //Search for Role Plebes
    let DefaultRole = member.guild.roles.cache.find(role => role.name === 'Plebes')
    
    //Set the role to new user
    member.roles.add(DefaultRole)
  
    //On Join Event send Embed
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${member.user.tag} | OLHA O MACACO!`)
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .addFields(
      {name: ':wave: Sabias que...', value: 'Os ursos polares são canhotos e a temperatura de um peido quando ele é criado é de 37º.', inline: true},
      {name: ':shield: Sobre o Usuário', value:  `${member.user.username} tem uma sindrome`, inline: true},
      {name: ':name_badge: Precisas de ajuda?!', value: 'Arranja um psicólogo caralho!', inline: true},
      {name: ':police_officer: Atenção!', value: 'Qualquer suspeita de que o usuário é ouvinte de LON3R JHONY resultará em escarradela!', inline: true},  
    )
    .setFooter('• © Todos os direitos reservados ao caralho ta foda filha da puta.')
   
    return member.guild.channels.cache.get(data.WelcomeChannelId).send({content: `<@${member.id}> \n`,embeds: [embed]})
}