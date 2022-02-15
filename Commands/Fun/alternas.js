module.exports = {
    name: 'alternas' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Alternas são a minha vida 😴',
    execute(Client, msg, args, Discord) {

        const alternas = [
            'https://pbs.twimg.com/media/EUIffiLXgAEGLwD.jpg',
            'https://c.tenor.com/nfJ-KKoFU74AAAAd/alternas-mamalhudas-alternas.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlmSqGzhTFx1cnyPZsPhPkObRf3VWzbhCrg&usqp=CAU',
            'https://pbs.twimg.com/profile_images/1296575562522263553/FQ_yfBXo_400x400.jpg',
            'https://i.pinimg.com/originals/ed/76/0f/ed760fd1f58398ffedf6b861353dc453.jpg',
            'https://i.ytimg.com/vi/OSee8mRIKUo/maxresdefault.jpg',
            'https://c.tenor.com/rjEuUzSqyGMAAAAC/egirl-girl.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVHf66zjj0hTKE2UKncQWYdYCMuBlLUJs-JGwYSxbinwiHUq2k8Kq4_Rr5myGMeeuk8w&usqp=CAU',
        ]

      let alternas1 = (alternas[Math.floor(Math.random() * alternas.length)]);  
      let embed = new Discord.MessageEmbed()
            .setTitle('Alternas são a minha vida!')
            .setImage(`${alternas1}`)
            .setColor(`#ff748c`)
            .setFooter({
                text:`I love alternas`,  
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
        msg.channel.send({embeds:[embed]})

    }
}