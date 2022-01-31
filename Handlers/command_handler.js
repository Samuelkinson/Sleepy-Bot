const fs = require('fs')

module.exports = (Client, Discord) =>{
    // Read Commands Folder and import new commands into the bot
    const commandFolders = fs.readdirSync('./Commands')

    for(const folder of commandFolders){
        const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'))
        for(const file of commandFiles){
            const command = require(`../Commands/${folder}/${file}`);
            if(command.name){
                Client.commands.set(command.name ,command)
            }else{
                continue;
            } 
        
        }
        
    }
    
}