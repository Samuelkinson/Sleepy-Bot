FaceitFunctions = require('./FaceitFunction')

module.exports = (Client, msg, args, Discord, response, responseStats,responseCountry,responseRegion)=>{

    //To get faceit Level Emoji
    const FaceitSkillLevel = response.games.csgo.skill_level.toString()
   
    let embed = new Discord.MessageEmbed()
        .setTitle(`${response.nickname} Faceit`)
        .setThumbnail(response.avatar)
        .addField('Rank:', `
         :flag_${response.country}: ${responseCountry.position}
         :flag_${response.games.csgo.region.toLowerCase()}: ${responseRegion.position}`, false
         ) 
         
        .addFields(
            {name: 'Nível:', value: `${Client.emojis.cache.get(FaceitFunctions.SkillLevelEmoji(FaceitSkillLevel))}`, inline: true},
            {name: 'Faceit Elo:', value: response.games.csgo.faceit_elo.toString(), inline: false},
            )
        
        .addField('Jogos :', `
         Jogos jogados: **${responseStats.lifetime.Matches}**
         Vitórias: **${responseStats.lifetime.Wins}**
         Taxa de Vitórias: **${responseStats.lifetime['Win Rate %']}%**
         Maior sequência de vitórias: **${responseStats.lifetime['Longest Win Streak']}🔥**
         Sequência de vitórias atual: **${responseStats.lifetime['Current Win Streak']}🔥**
         Jogos Recentes: ${FaceitFunctions.GetRecentGames(responseStats)}
         `, false)

        .addField("Média de K/D", responseStats.lifetime['Average K/D Ratio'])
        .addField("Média de HeadShots", `${responseStats.lifetime['Average Headshots %']}%`)
    
        .setFooter({
            text: `Comando patrocinado por Sleepy Bot😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
          }) 
        //Color Changer
        if(response.games.csgo.skill_level == 1){embed.setColor("9a9a9a")}
        else if(response.games.csgo.skill_level == 2 || 3 == response.games.csgo.skill_level){embed.setColor("4eb338")}
        else if(response.games.csgo.skill_level >= 4 && response.games.csgo.skill_level <= 7){embed.setColor("d8cd42")}
        else if(response.games.csgo.skill_level == 8 || 9 == response.games.csgo.skill_level){embed.setColor("ca6932")}
        else{embed.setColor("c5233f")}
         
        msg.channel.send({embeds:[embed]})
}