module.exports = (msg, Discord, command, Client) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Informação sobre o commando: \`${command.name}\``)
        .addFields(
            { name: '📝Descrição', value: !command.description ? `\`Descrição indisponível\`` : `\`${command.description}\`` },
            { name: '✏Abreviações', value: !command.aliases.length ? `\`Este commando não tem abreviaturas\`` : `\`${command.aliases.join(', ')}\`` },
            { name: '⌚Cooldown', value: `\`${command.cooldown} Segundos\`` },
            { name: '👑Permissões', value: !command.permissions.length ? `\`Este comando não necessita de permissões para ser usado\`` : `\`${command.permissions.join(', ')}\`` },
        )
        .setColor('GREEN')
        .setFooter({
            text:'Usage Syntax: <required> [optional]'
        })
        .setTimestamp()

    return msg.reply({ embeds: [embed] })
}