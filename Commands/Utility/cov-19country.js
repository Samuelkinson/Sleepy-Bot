const axios = require('axios')
const lookup = require('iso-countries-lookup');

var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': '5e21e0724cmsh7d777fca0033c58p1d0477jsn3efbcc5d4a4d'
    }
  };

function formatNumber(num) {
	return num.toLocaleString().replace(/,/g, ' ')
}

module.exports = {
    name: 'cov-19' ,
    aliases: ['c-19', 'c19'],
    permissions: [],
    cooldown: 0,
    description: 'Covid-19 country',
    async execute(Client, msg, args, Discord) {

        let m = msg.content.toLowerCase().substring(1).split(' ');
        m.shift();
        options.url = 'https://covid-193.p.rapidapi.com/statistics';
		options.params = { country: m.join('-') };
		axios.request(options).then(function (response) {
			if (response.data.response.length) {
				let c = response.data.response[0];
				let country = c.country.replace(/-/g, ' ');
				let flag = `\:flag_${lookup(c.country).toLowerCase()}:`;

          const embed = new Discord.MessageEmbed()
					.setTitle(`${flag ? flag : "\:earth_americas:"} ${country}`)
					.setDescription("Estatísticas do país")
					.addField("Total de casos", formatNumber(c.cases.total))
					.addField("Recuperada", formatNumber(c.cases.recovered))
					.addField("Mortes", formatNumber(c.deaths.total))
					.setFooter(`Última atualização: ${new Date(c.time).toISOString().substring(0, 10)}`)
                msg.channel.send({embeds:[embed]})
				
			} else msg.channel.send('Não encontrei esse país');
      
		}).catch(function (error) {
			console.error(error);
		});
    }
}