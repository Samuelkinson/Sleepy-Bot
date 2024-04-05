
module.exports = (Discord, Client ) =>{
  console.log(`Logged in has ${Client.user.tag}!`); 
  
      const arrayOfStatus = [
         `${Client.guilds.cache.size} servidores`,
         `O jogo do sono`,
         `Lilia a dizer "Sleepyyyy Time!"`,
         `eevee ep seeds`,
     ];
     const arrayOfTypes = ['WATCHING','PLAYING','LISTENING','LISTENING'];
     let i = 0

     setInterval(() =>{
         if(i === arrayOfStatus.length) i = 0;
         if(i === arrayOfTypes.length) i = 0;

         const status = arrayOfStatus[i];
         const statusType = arrayOfTypes[i];

         Client.user.setActivity(status, {type: statusType})
         i++;
     },10000) //10 secs 
}