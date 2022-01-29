const fs = require('fs')
const DefaultPrefix = require('../../config.json').prefix
const Nocommand = require('../../Embeds/Command/NoCommand')
const CommandInfo = require('../../Embeds/Command/CommandInfo')
const GuildSchema = require('../../Schemas/Guild-Schema')

const HelpPagination = require('../../Embeds/Help/HelpPagination');
const HelpAdmin = require('../../Embeds/Help/HelpAdmin');
const HelpFun = require('../../Embeds/Help/HelpFun');
const HelpUtility = require('../../Embeds/Help/HelpUtility');
const HelpVoice = require('../../Embeds/Help/HelpVoice');
const HelpSearch = require('../../Embeds/Help/HelpSearch')

module.exports = {
    name: 'help',
    aliases: ['socorro', 'h', 'ebook', 'ajuda'],
    permissions: ['SEND_MESSAGES'],
    cooldown: 2,
    description: `Help command | ${DefaultPrefix}help [CommandName] or [Category]`,
    async execute(Client, msg, args, Discord) {
        let Prefix;

        let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
        if (data) Prefix = data.prefix
        else Prefix = DefaultPrefix

        let categories = [];
        // Turns Folders in Commands to categories and gets every command inside the folder 
        fs.readdirSync('./commands/').forEach(dir => {
            const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
            const cmds = commands.map(command => {
                let file = require(`../../Commands/${dir}/${command}`)
                if (!file.name) return 'No Command Name';

                let name = file.name.replace('.js', '')
                return `\`${name}\``
            });
            let data = new Object();

            data = {
                name: dir.toUpperCase(),
                value: cmds.length === 0 ? '`In progress`' : cmds.join(' '),
            };

            categories.push(data)
        });

        if (args.length > 1) return Nocommand(msg, Discord, Client, Prefix)
        if (!args[0]) {
             HelpPagination(Discord, Client, msg, categories, Prefix);
        } else {
            const cmd = args[0].toLowerCase();
            const command = Client.commands.get(cmd) || Client.commands.find(a => a.aliases && a.aliases.includes(cmd))
            if (command) return CommandInfo(msg, Discord, command, Client)

            if (cmd === 'admin' || cmd === 'a') return HelpAdmin(Discord, Client, msg, categories)
            else if (cmd === 'fun' || cmd === 'f') return HelpFun(Discord, Client, msg, categories)
            else if (cmd === 'utility' || cmd === 'u') return HelpUtility(Discord, Client, msg, categories)
            else if (cmd === 'voice' || cmd === 'v') return HelpVoice(Discord, Client, msg, categories)
            else if (cmd === 'search' || cmd === 's') return HelpSearch(Discord, Client, msg, categories)

            if (!command) return Nocommand(msg, Discord, Client, Prefix)
        }

    }
}

