const time = require('../../../Resources/timedisplay')

module.exports = (Client, msg, Discord, osuUser) =>{

    const embed = new Discord.MessageEmbed()
    .setColor('#37dc0c')
    .setTitle(`:flag_${osuUser.country.toLowerCase()}: **${osuUser.name}** Osu! profile `)
    .setThumbnail(`http://s.ppy.sh/a/${osuUser.id}`)
    .setURL(`https://osu.ppy.sh/users/${osuUser.id}`)
    .addFields(
        {name: '🆔Osu id:', value: osuUser.id, inline: true},
        {name: '🎚️Osu nível :', value: parseFloat(osuUser.level).toFixed(2), inline: true},
        {name: '⌨️Partidas jogadas:', value: osuUser.counts.plays, inline: true}, 
        )
    .addFields(
            {name: '🎯Precisão:', value: parseFloat(osuUser.accuracy).toFixed(2) + '%', inline: true}, 
            {name: '⌛Tempo gasto a jogar:', value: time.time(osuUser.secondsPlayed), inline: true},
            {name: '📆Data de entrada:', value: osuUser.raw_joinDate, inline: true}, 
        )
    .addFields(
            {name: '🍣PP Cru:', value: osuUser.pp.raw, inline: true},
            {name: '🌍PP Ranking mundial:', value: osuUser.pp.rank, inline: true},
            {name: '🗾PP Classificação do país: ', value: osuUser.pp.countryRank, inline: true}, 
        )    

    .addField('Pontuações :', `
         **👩‍💻Competitivo:** \`${osuUser.scores.ranked}\`
         **👨‍💻Total:** \`${osuUser.scores.total}\``, false)
    
    .addField('💥Contagem de pontuações:', ` **SSH:**  \`${osuUser.counts.SSH} \` **SS:**  \`${osuUser.counts.SS} \`**SH:**  \`${osuUser.counts.SH} \` **S:**  \`${osuUser.counts.S} \` **A:**  \`${osuUser.counts.A} \``, false)
    .setFooter({
        text:`Comando Patrocinado por @SleepyBot 😴`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
    msg.channel.send({embeds:[embed]}).then(msg.delete()) 
}
