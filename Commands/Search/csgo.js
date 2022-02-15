const csgoembed = require('../../Resources/csgo')

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
    description: 'Cs Go tracker 😴',
    execute(Client, msg, args, Discord) {

    var UR_L = "https://tracker.gg/csgo/profile/steam/" + args[0] + "/overview";

    if(!args[0]){
        return msg.channel.send(`Insira um ID ou STEAMID64 válido.`);
    }

    csgoembed(Client, msg, args, Discord, getStatData, UR_L)
    }
}

