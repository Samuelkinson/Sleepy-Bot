const Discord = require('discord.js'); //Package do discord.js

const myIntents = new Discord.Intents(); //Intents é as permissões que vão ser requisitadas do discord.js
myIntents.add(
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
  Discord.Intents.FLAGS.GUILD_MEMBERS,
  Discord.Intents.FLAGS.GUILD_INVITES,
  Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
)

const Client = new Discord.Client({ intents: myIntents });

const DBconnection = require('./MongoConnection')
require('dotenv').config()

DBconnection(); //Conectar à base de dados

// Cria uma nova coleção do discord
Client.commands = new Discord.Collection();
Client.events = new Discord.Collection();

//Gestores de eventos e comandos
['command_handler', 'event_handler'].forEach(handler => {
  require(`./Handlers/${handler}`)(Client, Discord)
})

Client.login(process.env.TOKEN); //login bot com o token


