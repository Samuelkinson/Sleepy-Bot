const prefix = require('../../config.json').prefix

module.exports = (msg, Discord, command, Client) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Informação sobre o commando: \`${command.name}\``)
        .addFields(
            { name: '📝Descrição', value: !command.description ? `\`Descrição indisponível\`` : `\`${command.description}\`` },
            { name: '✏Abreviações', value: !command.aliases.length ? `\`Este commando não tem abreviaturas\`` : `\`${command.aliases.join(', ')}\`` },
            { name: '⌚Cooldown', value: `\`${command.cooldown} Segundos\`` },
            { name: '👑Permissões', value: !command.permissions.length ? `\`Este comando não necessita de permissões para ser usado\`` : `\`${command.permissions.join(', ')}\`` },
        )
        .setColor('#2f3136')
        .setFooter({
            text:`${prefix}<comando> [opcional]`
        })
        .setTimestamp()

    return msg.channel.send({ embeds: [embed] }).then(msg.delete());
}