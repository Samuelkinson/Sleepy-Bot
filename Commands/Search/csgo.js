var request = require('request');
var cheerio = require('cheerio');

function getStatData(location , $){
    var selector = $('.segment-stats .value').eq(location).text();
    var stat_array = $.parseHTML(selector);
    var stat = 0;

    if(stat_array == null || stat_array.lengh == 0){
        return -1;
    }else{
        stat = stat_array[0].data;
    }

    return stat;
}  

module.exports = {
    name: 'csgo' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Cs Go command',
    execute(Client, msg, args, Discord) {
        var UR_L = "https://tracker.gg/csgo/profile/steam/" + args[0] + "/overview";

    if(!args[0]){
        return msg.channel.send(`Insira um ID ou STEAMID64 válido.`);
    }

    request(UR_L, function(err, resp, body){
        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if(KD == -1){
            return msg.channel.send(`Inválido, certifique-se de que o seu perfil não é privado e de que digitas-te um ID ou STEAMID64 válido! (https://steamid.io/lookup/${args}) `);
        }

        var KILLS = getStatData(1, $);
        var WIN = getStatData(2, $);
        var MVP = getStatData(3, $);
        var HS = getStatData(4, $);
        var DEATHS = getStatData(5, $);
        var SCORE = getStatData(8, $);
        var MONEY = getStatData(9, $);
        var BS = getStatData(12, $);
        var BD = getStatData(13, $);
        var HR = getStatData(14, $);

        var embed = new Discord.MessageEmbed()
            .setTitle("__***CSGO Stats***__")
            .setURL(UR_L)
            .addField("Current stats",
            "Total KD: " + "__**" + KD + "**__" + "\n" +
            "% De vitórias totais: " + "__**" + WIN + "**__" + "\n" +
            "Total de MVPs: " + "__**" + MVP + "**__" + "\n" +
            "Partidas perdidas: " + "__**" + SCORE + "**__" + "\n" +
            "Total de kills: " + "__**" + HS + "**__" + "\n" +
            "Total de mortes: " + "__**" + DEATHS + "**__" + "\n" +
            "Conjunto total de bombas:  " + "__**" + BS + "**__" + "\n" +
            "Total de bombas desativadas: " + "__**" + BD + "**__" + "\n" +
            "Total de headshot: " + "__**" + KILLS + "**__" + "\n" +
            "Score" + "__**" + MONEY + "**__" + "\n" +
            "Total de dinheiro ganho: " + "__**" + HR + "**__", true)
            .addField("Informações vindas de:", `**[tracker.gg](https://tracker.gg/csgo)**`, false)
            .setTimestamp()
            .setColor("#37dc0c");

        msg.channel.send({embeds:[embed]});
        })
    }
}
