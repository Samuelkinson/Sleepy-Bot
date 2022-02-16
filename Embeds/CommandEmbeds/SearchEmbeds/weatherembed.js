module.exports=(Client, msg, args, Discord, response)=>{
    
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
        { name: `🌡Temperatura máxima:`, value: `${temp_max}\u00B0C`, inline: true },
        { name: `🌡Temperatura mínima:`, value: `${temp_min}\u00B0C`, inline: true },
        { name: `🌧Humidade:`, value: `${humidity} %`, inline: true },
        { name: `🌫Velocidade do vento:`, value: `${wind} m/s`, inline: true },
        { name: `🌬Pressão:`, value: `${pressure} hpa`, inline: true },
        { name: `🌦Nebulosidade:`, value: `${cloudness}`, inline: true },
    )
    .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
    .setFooter({
        text:`Comando Patrocinado por @SleepyBot 😴`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    }); 
    
    return msg.channel.send({embeds: [embed]}).then(msg.delete());
}   
