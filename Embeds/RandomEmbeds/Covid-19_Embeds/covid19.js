module.exports = (Discord, msg, c, country, flag ) =>{

    function formatNumber(num) {
        return num.toLocaleString().replace(/,/g, ' ')
    }
    const embed = new Discord.MessageEmbed()
	.setTitle(`${flag ? flag : "\:earth_americas:"} ${country}`)
	.setDescription("Estatísticas do país")
	.addFields(
        {name: 'Total de casos', value: formatNumber(c.cases.total), inline: true},
        {name: 'Novos casos', value: formatNumber(c.cases.new), inline: true},
        {name: 'Casos Ativos', value: formatNumber(c.cases.active), inline: true}, 
		{name: 'Casos Criticos', value: formatNumber(c.cases.critical), inline: true},
        {name: 'Casos Recuperados', value: formatNumber(c.cases.recovered), inline: true},
        )
	.addFields(
			{name: 'Total de Mortes', value: formatNumber(c.deaths.total), inline: true},
			{name: 'Novas Mortes', value: formatNumber(c.deaths.new), inline: true},
			{name: 'Total de Testes', value: formatNumber(c.tests.total), inline: true},
		)			
    .setFooter({
        text:`Última atualização: ${new Date(c.time).toISOString().substring(0, 10)}`
    })

    return msg.channel.send({embeds:[embed]})
}