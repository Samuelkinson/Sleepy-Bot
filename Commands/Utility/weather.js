const axios = require("axios")
const weatherkey = require("../../config.json").weatherkey

module.exports = {
    name: 'weather' ,
    aliases: ['tempo'],
    permissions: [],
    cooldown: 0,
    description: 'Diz o tempo',
    async execute(Client, msg, args, Discord) {

        const sitio = args.join(" ")
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${sitio}&units=metric&appid=${weatherkey}`).then(response => {

            const apiData = response;
            const currentTemp = Math.ceil(apiData.data.main.temp)
            const wind = apiData.data.wind.speed; //dá
            const icon = apiData.data.weather[0].icon //dá
            const cityName = args //dá
            const country = apiData.data.sys.country //dá
            const cloudness = apiData.data.weather[0].description; //dá
            const { pressure, humidity, temp_max, temp_min  } = response.data.main;  //dá

            const embed = new Discord.MessageEmbed()
             .setTitle(`A temperatura é ${currentTemp}°C em ${cityName}, ${country}` ) 
            .setColor(`#ff748c`)
            .addFields(
                { name: `Temperatura máxima:`, value: `${temp_max}\u00B0C`, inline: true },
                { name: `Temperatura mínima:`, value: `${temp_min}\u00B0C`, inline: true },
                { name: `Umidade:`, value: `${humidity} %`, inline: true },
                { name: `Velocidade do vento:`, value: `${wind} m/s`, inline: true },
                { name: `Pressão:`, value: `${pressure} hpa`, inline: true },
                { name: `Nebulosidade:`, value: `${cloudness}`, inline: true },
            )
             .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
            .setFooter('Sleepy Bot viu pela janela😴💤'); 
            return msg.channel.send({embeds: [embed]}).then(msg.delete());

        }).catch(err => {
       msg.reply(`Enter a vailid city name`)
    
    }
        )
    }
}