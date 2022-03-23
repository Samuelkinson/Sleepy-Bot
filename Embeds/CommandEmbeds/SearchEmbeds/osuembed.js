const time = require('../../../Resources/timedisplay')
const emojis = require('../../../Resources/Emojis.json').Osu 

module.exports = (Client, msg, Discord, osuUser) =>{

    const OsuA = Client.emojis.cache.get(emojis.OsuA); const OsuS = Client.emojis.cache.get(emojis.OsuS);
    const OsuSS = Client.emojis.cache.get(emojis.OsuSS); const OsuSH = Client.emojis.cache.get(emojis.OsuSH);
    const OsuSSH = Client.emojis.cache.get(emojis.OsuSSH);

    const embed = new Discord.MessageEmbed()
    .setColor('#37dc0c')
    .setTitle(`:flag_${osuUser.country.toLowerCase()}: **${osuUser.name}** Osu! Perfil!`)
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
    
    .addField('💥Contagem de pontuações:', ` ${OsuSSH}  \`${osuUser.counts.SSH} \` ${OsuSS}  \`${osuUser.counts.SS} \` ${OsuSH}  \`${osuUser.counts.SH} \` ${OsuS}  \`${osuUser.counts.S} \` ${OsuA}  \`${osuUser.counts.A} \``, false)
    .setFooter({
        text:`Comando Patrocinado por @SleepyBot 😴`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
    msg.channel.send({embeds:[embed]}).then(msg.delete()) 
}
