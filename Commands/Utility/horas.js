module.exports = {
    name: 'horas' ,
    aliases: ['time'],
    permissions: [],
    cooldown: 0,
    description: 'Diz as horas',
    async execute(Client, msg, args, Discord) {

        var hoje = new Date()
        let Dia = hoje.toString().split(" ")[0].concat("day");
        let mes = hoje.toString().split(" ")[1]
        let ano = hoje.toString().split(" ")[2]
        const embed = new Discord.MessageEmbed()
        .setColor("#a35ecc")
        .addField("📣Hoje é:", `${Dia}` + ", " + `${mes}` + ", " + `${ano}`)
        .addField("⌚Tempo do dia:", `${hoje.toString().split(" ")[4]}`)
        msg.channel.send({embeds: [embed]})  
    } 
}