const DefaultPrefix = require('../../config.json').prefix
const CooldownEmbed = require('../../Embeds/Command/CommandCooldown');
const CommandNotFound = require('../../Embeds/Command/NoCommand');
const GuildSchema = require('../../Schemas/Guild-Schema');
const CommandSchema = require('../../Schemas/Command-Schema');
const PremiumSchema = require('../../Schemas/Premium-Schema');
const OwnerSchema = require('../../Schemas/Owner-Schema');
const PremiumGuildSchema = require('../../Schemas/Premium-Guild-Schema');

const cooldowns = new Map();
module.exports = async (Discord, Client, msg) =>{
    //Declaração de prefixo
    let prefix;
    
    let data = await GuildSchema.findOne({
        GuildID: msg.guild.id
    })
    if(data === null){
        prefix = DefaultPrefix
    }else{
        prefix = data.prefix
    }
    // Verifica se a mensagem foi enviado com o prefixo.
    if ((!msg.content.toLowerCase().startsWith(prefix)) || (msg.author.bot) || (!msg.guild)) return
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    //Encontra o comando na pasta de comandos 
    const command = Client.commands.get(cmd) || Client.commands.find(a => a.aliases && a.aliases.includes(cmd))

    // Verifica se o comando existe
    if(!command) return CommandNotFound(msg, Discord, Client, prefix)
    
    //Sistema de cooldown
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);  // Pega o tempo de cooldown do comando
    const cooldown_amount = (command.cooldown) * 1000; //Tempo de cooldown  para transformar em segundos 

    if(time_stamps.has(msg.author.id)){ // Verifica se o usuário já está no cooldown
        const expiration_time = time_stamps.get(msg.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000; 

            // Envia o embed de cooldown
            return CooldownEmbed(msg, time_left, command, Discord)
        }
    }
    // Adiciona o usuário ao cooldown
    time_stamps.set(msg.author.id, current_time);
    setTimeout(() => time_stamps.delete(msg.author.id), cooldown_amount);
    

    // Sistema de premições   
    const validPermissions = [  //Array de permissões 
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)) return console.log(`Precisas de permissões ${perm}`)
            
            if(!msg.member.permissions.has(perm)){
                invalidPerms.push(perm)
            }
        }

        if(invalidPerms.length){
            return msg.channel.send({ content: `Não tens permissões`})
        }
    }
    //Verifica se é Premium
    if(command.premium && !(await PremiumSchema.findOne({User: msg.author.id}))) return msg.channel.send('Não és premium!')

    //Verifica se é Premium Guild Id
    if(command.premiumguild && !(await PremiumGuildSchema.findOne({Guild: msg.guild.id}, async(err, data) => {
        if(!data) return msg.channel.send(`Precisas de Premium Guild!`);
        if(!data.Permanent && Date.now()> data.Expire){
            data.delete();
            return msg.channel.send(`Premium Guild expirou!`);
        } 
    }))) return 

    //Verifica se é Owner
    if(command.owner && !(await OwnerSchema.findOne({User: msg.author.id}))) return msg.channel.send('Não és owner!')
    //Executa o comando válido
    if(command) {
        const check = await CommandSchema.findOne({ Guild: msg.guild.id, Cmds: cmd })
        if(check){
        if(check.Cmds.includes(command.name)) return msg.channel.send('Comando desativado')
        } else {
        command.execute(Client, msg, args, Discord, cmd)
    }}

}