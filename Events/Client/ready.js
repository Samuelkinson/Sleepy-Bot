
module.exports = (Discord, Client ) =>{
  console.log(`Logged in has ${Client.user.tag}!`); 
  
      const arrayOfStatus = [
         `Over ${Client.guilds.cache.size} trash servers`,
         `The game of Sleep`,
         `To Lilia saying Sleepyyyy Time!`,
         `You making bad decisions`,
     ];
     const arrayOfTypes = ['WATCHING','PLAYING','LISTENING','WATCHING'];
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