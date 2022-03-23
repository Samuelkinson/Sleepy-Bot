function formatNumber(num) {
    return num.toLocaleString().replace(/,/g, ' ')
}

module.exports = (Discord, msg,  c, country, flag  ) =>{
 
    let embed = new Discord.MessageEmbed()
    .setTitle(`${flag ? flag : "\:earth_americas:"} ${country}`)
	.setDescription("Estatísticas do país") 
    .addFields(
        {name: '🏥Total de casos', value: `${c.cases.total? formatNumber(c.cases.total) : 'Sem valor'} `, inline: true},
        {name: '😷Novos casos', value: `${c.cases.new ? formatNumber(c.cases.new) : 'Sem valor'} ` , inline: true}, 
        {name: '🤒Casos Ativos', value: `${c.cases.active ? formatNumber(c.cases.active) : 'Sem valor'} `, inline: true},
        {name: '☢️Casos Criticos', value: `${c.cases.critical ? formatNumber(c.cases.critical) : 'Sem valor'} `, inline: true},
        {name: '😴Casos Recuperados', value: `${c.cases.recovered ? formatNumber(c.cases.recovered) : 'Sem valor'} `, inline: true},
        )
    .addFields(
			{name: '☠️Total de Mortes', value: `${c.deaths.total? formatNumber(c.deaths.total) : 'Sem valor'} `, inline: true},
			{name: '☠️Novas Mortes', value: `${c.deaths.new? formatNumber(c.deaths.new) : 'Sem valor'} `, inline: true},
			{name: '🧪Total de Testes', value: `${c.tests.total? formatNumber(c.tests.total) : 'Sem valor'} `, inline: true},
		)	
    .setFooter({
            text:`Última atualização: ${new Date(c.time).toISOString().substring(0, 10)}; Comando Patrocinado por @SleepyBot 😴 `  
        })
    return msg.channel.send({embeds:[embed]}).then(msg.delete()) 
}