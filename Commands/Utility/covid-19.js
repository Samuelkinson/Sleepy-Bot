const axios = require('axios')

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
    name: 'cov-19-leader' ,
    aliases: ['c-19-leader', 'c19-leader','topc-19'],
    permissions: [],
    cooldown: 0,
    description: 'Covid-19 leaderboard',
    async execute(Client, msg, args, Discord) {
        
        
		options.url = 'https://covid-193.p.rapidapi.com/statistics';
		delete options.params;
		axios.request(options).then(function (response) {
			let c = response.data.response.filter(e => e.population);
			c.sort(function (a, b) {
				if (a.cases.total < b.cases.total) return 1;
				else if (a.cases.total == b.cases.total) return 0;
				else return -1;

			});
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
           

		}).catch(function (error) {
			console.error(error);
        })
    }
}