const trim = require('../../../Resources/trimfunction')
const emoji = require('../../../Resources/Emojis.json')

module.exports = (Client, msg, args, Discord, response)=>{

    const TwitterEmoji = Client.emojis.cache.get(emoji.Emojis.Twitter)
    const embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(response.login)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription( response.bio ? trim.trimtext(response.bio) : 'Sem Biográfia') // Bio Of User Searched
        .addField('📘Repositórios públicos:', response.public_repos.toLocaleString()) // Repos Of User Searched
        .addFields(
            {name: '🫂Seguidores:', value: response.followers.toLocaleString(), inline: true},// Followers Of User Searched
            {name: '🫂Segue:', value: response.following.toLocaleString(), inline: true}, // How Many Following Of User Searched
            
            )
        .addField('📩Email:', response.email ? response.email : 'Sem Email') // Email Of User Searched
        .addField(`${TwitterEmoji}Twitter:`, response.twitter_username ? `@${response.twitter_username}` : 'Sem Twitter') // Twitter Of User Searched
        .addField('🏙Empresa:', response.company ? response.company : 'Sem Empresa') // Company Of User Searched 
        .addField('🌍Localização:', response.location ? response.location : 'Sem Localização') // Location Of User Searched 
        .addField('📅Criado:', response.created_at )  // Created Of User Searched
        .addField('📔Blog:', response.blog ? response.blog : 'Sem blog') //Blog Of User Searched */
        .addField('🧾Pode ser contratado?', response.hireable ? response.hireable : 'Sem informação sobre contratações') // Twitter Of User Searched
        .setFooter({
            text:`Comando Patrocinado por @SleepyBot 😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
    return msg.channel.send({embeds: [ embed]}).then(msg.delete()); 

}
    