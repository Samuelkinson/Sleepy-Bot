const axios = require("axios")
const weatherkey = require("../../config.json").weatherkey
const weatherembed = require('../../Embeds/CommandEmbeds/SearchEmbeds/weatherembed')

module.exports = {
    name: 'weather' ,
    aliases: ['tempo'],
    permissions: [],
    cooldown: 0,
    description: 'Diz o tempo',
    async execute(Client, msg, args, Discord) {

        const location = args.join(" ")
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherkey}`).then(response => {
        weatherembed(Client, msg, args, Discord, response)

        }).catch(err => {
            msg.channel.send(`Enter a vailid city name`)
        })
    }
}
        
 