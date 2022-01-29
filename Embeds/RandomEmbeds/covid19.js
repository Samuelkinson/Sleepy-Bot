module.exports = (Discord, msg, c, country, flag ) =>{

    function formatNumber(num) {
        return num.toLocaleString().replace(/,/g, ' ')
    }
    const embed = new Discord.MessageEmbed()
	.setTitle(`${flag ? flag : "\:earth_americas:"} ${country}`)
	.setDescription("Estatísticas do país")
	.addField("Total de casos", formatNumber(c.cases.total))
	.addField("Recuperada", formatNumber(c.cases.recovered))
	.addField("Mortes", formatNumber(c.deaths.total))
	.setFooter(`Última atualização: ${new Date(c.time).toISOString().substring(0, 10)}`)

    return msg.channel.send({embeds:[embed]})
}