const axios = require('axios')
const lookup = require('iso-countries-lookup');
const covid19 = require('../../Embeds/CommandEmbeds/UtilityEmbeds/Covid-19_Embeds/covid19')
const covid19Leaderboard = require('../../Embeds/CommandEmbeds/UtilityEmbeds/Covid-19_Embeds/covi19leaderboard')
const covidapikey = require('../../config.json').covidapikey

var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': covidapikey
    }
  };

module.exports = {
    name: 'covid-19' ,
    aliases: [ 'cov-19','c-19', 'c19', 'covid' ],
    permissions: [],
    cooldown: 0,
    description: 'Covid-19 país e Pódio😴',
    premium: false,
    premiumguild: false, 
    owner: false,
    async execute(Client, msg, args, Discord, cmd) {

     
     if (!args[0]) {
      options.url = 'https://covid-193.p.rapidapi.com/statistics';
      delete options.params;
      axios.request(options).then(function (response) {
        let c = response.data.response.filter(e => e.population);
        c.sort(function (a, b) {
          if (a.cases.total < b.cases.total) return 1;
          else if (a.cases.total == b.cases.total) return 0;
          else return -1; 
        });

      covid19Leaderboard(Discord, msg, c) //COVID-19 LeaderBoard Embed
      
		}).catch(function (error) {
			
		});
      
     } else {
      let m = msg.content.toLowerCase().substring(1).split(' ');
      m.shift();
      options.url = 'https://covid-193.p.rapidapi.com/statistics';
      options.params = { country: m.join('-') };
      axios.request(options).then(function (response) {

      if (response.data.response.length) {
      let c = response.data.response[0];
      let country = c.country.replace(/-/g, ' ');
      let flag = `\:flag_${lookup(c.country).toLowerCase()}:`;
      
      covid19(Discord, msg, c, country, flag ) //COVID-19 Country Embed

    }else{
      msg.channel.send(`Couldn't find that country`)
    }}).catch(function (error) {
        
     })
    }
  }
}  
       
    
