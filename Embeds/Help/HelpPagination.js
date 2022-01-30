const { buttonsPagination } = require('djs-buttons-pagination')

module.exports = async (Discord, Client, msg, categories, Prefix) => {
    let HelpInfo = new Discord.MessageEmbed()
        .setColor('#c19e3c')
        .setTitle(`Commandos do SleepyBot`)
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField('**Prefixo**', `Prefixo do bot é: \`${Prefix}\``)
        .addField('**Páginas**', `\`1.Informação do SleepyBot\` \n \`2.Utility\` \n \`3.Voz\` \n  \`4.Diversão\` \n \`5.Admin\` \n \`6.Procura\``)
        .addField('**Ajuda na Navegação**', `Usa as setas abaixo para veres as diferentes páginas`)
        .setFooter('Usage Syntax: <required> [optional]')

    let HelpAdmin = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Comandos de Administrador do SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`👑` + categories[0].name, categories[0].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    let HelpFun = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Comandos de diversão SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🥳` + categories[1].name, categories[1].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    let HelpSearch = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Comandos de procura SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🔎` + categories[2].name, categories[2].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    let HelpUtility = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Comandos de Utility do SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`❓` + categories[3].name, categories[3].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    let HelpVoice = new Discord.MessageEmbed()
        .setColor('#4cc7c9')
        .setTitle('Comandos de Voz do SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🔊` + categories[4].name, categories[4].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    

    const pages = [
        HelpInfo,
        HelpUtility,
        HelpVoice,
        HelpFun,
        HelpAdmin,
        HelpSearch,
    ] 
    

    const emojiList = ["⏪", "⏩"];
    const timeout = '600000'
    buttonsPagination(msg, pages, emojiList, timeout)

}