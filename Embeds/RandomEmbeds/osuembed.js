const { text } = require("cheerio/lib/api/manipulation")

module.exports = (Client, msg, Discord, osuUser) =>{

    const embed = new Discord.MessageEmbed()
    .setColor('#37dc0c')
    .setTitle(`:flag_${osuUser.country.toLowerCase()}: **${osuUser.name}** Osu! profile `)
    .setThumbnail(`http://s.ppy.sh/a/${osuUser.id}`)
    .setURL(`https://osu.ppy.sh/users/${osuUser.id}`)
    .addFields(
        {name: '**Osu** id:', value: osuUser.id, inline: true},
        {name: '**Osu** level:', value: osuUser.level, inline: true},
        {name: '**Osu** plays:', value: osuUser.counts.plays, inline: true}, 
        )
    .addFields(
            {name: '**Osu** accuracy:', value: osuUser.accuracy, inline: true},
            {name: 'Seconds spent playing', value: osuUser.secondsPlayed, inline: true},
            {name: 'Join date', value: osuUser.raw_joinDate, inline: true}, 
        )
    .addField('Scores:', `
        Scores ranked ${osuUser.scores.ranked}
        Scores total ${osuUser.scores.total}`, false)
    .addFields(
        {name: 'Raw **PP**', value: osuUser.pp.raw, inline: true},
        {name: 'Rank **PP**', value: osuUser.pp.rank, inline: true},
        {name: 'Country Rank **PP**', value: osuUser.pp.countryRank, inline: true}, 
        )
    .addField('Rank count:', `
        **SSH:** ${osuUser.counts.SSH} 
        **SS:** ${osuUser.counts.SS}
        **SH:** ${osuUser.counts.SH}
        **S:** ${osuUser.counts.S}
        **A:** ${osuUser.counts.A}`, false)
        .setFooter({
            text: `Click the circles😴💤`,  
            URL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        }) 
    msg.channel.send({embeds:[embed]}) 
}
