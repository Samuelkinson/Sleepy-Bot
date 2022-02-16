const trim = require('../../../Resources/trimfunction')

module.exports = (Client, msg, args, Discord, response)=>{

    const embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(response.login)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription( response.bio ? trim.trimtext(response.bio) : 'Sem Biográfia') // Bio Of User Searched
        .addField('Repositórios públicos:', response.public_repos.toLocaleString()) // Repos Of User Searched
        .addField('Seguidores:', response.followers.toLocaleString()) // Followers Of User Searched
        .addField('Segue:', response.following.toLocaleString()) // How Many Following Of User Searched
        .addField('Email:', response.email ? response.email : 'Sem Email') // Email Of User Searched
        .addField('Twitter:', response.twitter_username ? response.twitter_username : 'Sem Twitter') // Twitter Of User Searched
        .addField('Empresa:', response.company ? response.company : 'Sem Empresa') // Company Of User Searched 
        .addField('Localização:', response.location ? response.location : 'Sem Localização') // Location Of User Searched 
        .addField('Criado:', response.created_at )  // Created Of User Searched
        .addField('Blog:', response.blog ? response.blog : 'Sem blog') //Blog Of User Searched */
        .addField('Pode ser contratado?', response.hireable ? response.hireable : 'Sem informação sobre contratações') // Twitter Of User Searched
        .setFooter({
            text:`Comando Patrocinado por @SleepyBot 😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
    return msg.channel.send({embeds: [ embed]}).then(msg.delete()); 

}
    