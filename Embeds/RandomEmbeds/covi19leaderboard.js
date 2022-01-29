module.exports = (Discord, msg, c ) =>{

    function formatNumber(num) {
        return num.toLocaleString().replace(/,/g, ' ')
    }
    const embed = new Discord.MessageEmbed()
    .setTitle(`\:trophy: Leaderboard \:trophy:`)
    .setDescription("Total de casos confirmados")
    .addField(`\:first_place:\t${c[0].country}`, formatNumber(c[0].cases.total))
    .addField(`\:second_place:\t${c[1].country}`, formatNumber(c[1].cases.total))
    .addField(`\:third_place:\t${c[2].country}`, formatNumber(c[2].cases.total))
    .addField(`\:medal:\t${c[3].country}`, formatNumber(c[3].cases.total))
    .addField(`\:medal:\t${c[4].country}`, formatNumber(c[4].cases.total))
    .setFooter(`Last Update: ${new Date().toISOString().substring(0, 10)}`)

    msg.channel.send({embeds:[embed]})
   
}