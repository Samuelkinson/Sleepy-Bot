module.exports = {
    name: 'nickname' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Nickname @SleepyBot "O melhor bot"',

    async execute(Client, msg, args, Discord) {
        
        const member = msg.mentions.members?.first();
        const nickname = args.slice(1).join(` `);
        if (!member) return msg.channel.send('Preciso de um membro')
        if (!nickname.length) return msg.channel.send('Preciso de um nick')
        if (nickname.length > 32) return msg.channel.send('Introduz um nick de até 32 caracteres')
        try {
            await member.setNickname(nickname);
            return msg.channel.send('O nickname foi alterado').then(msg.delete()); 
        } catch (error) {
            return msg.channel.send('Falta de permissões/role superior ao meu').then(msg.delete()); 
        }
       
    }
}