const capitalize = require('../../../Resources/capitalize')

module.exports = (Client, msg, args, Discord, pokeData) => {
    
     //Pokemon Msg
     const embed = new Discord.MessageEmbed()
     .setTitle(`${capitalize.Capitalize(pokeData.name)} #${pokeData.id}`)
     .setThumbnail(`${pokeData.sprites.front_default}`)
     .addField('✨Experiência base:',`${ pokeData.base_experience.toString()}xp`, false)
     .setFooter({
      text:`Comando Patrocinado por @SleepyBot 😴`, 
      iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
      }) 
      pokeData.stats.forEach(stat => embed.addField(`🎴Estatística:`, `**${capitalize.Capitalize(stat.stat.name.toString())}**: ${stat.base_stat.toString()}`, true)) 
      pokeData.abilities.forEach(abilities => embed.addField('📚Habilidades:', abilities.ability.name, true))  
      embed.addField('🐘Peso:', `${pokeData.weight.toString()}Kg`, false) 
      embed.addField('🦒Altura:',  `${pokeData.height.toString()} metros`, false)
      pokeData.types.forEach(poketype =>{embed.addField('🩸Tipo:', capitalize.Capitalize(poketype.type.name), true)}) 
      msg.channel.send({embeds : [embed]})
}