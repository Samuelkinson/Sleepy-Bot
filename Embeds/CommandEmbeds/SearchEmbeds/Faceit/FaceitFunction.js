const emoji = require('../../../../Resources/Emojis.json').Faceit

module.exports = {
    SkillLevelEmoji: function skillLevelEmoji(FaceitSkillLevel){

        if(FaceitSkillLevel == 1){FaceitSkillLevel = emoji.Level1Faceit} 
        else if(FaceitSkillLevel == 2){FaceitSkillLevel = emoji.Level2Faceit}
        else if(FaceitSkillLevel == 3){FaceitSkillLevel = emoji.Level3Faceit}
        else if(FaceitSkillLevel == 4){FaceitSkillLevel = emoji.Level4Faceit}
        else if(FaceitSkillLevel == 5){FaceitSkillLevel = emoji.Level5Faceit}
        else if(FaceitSkillLevel == 6){FaceitSkillLevel = emoji.Level6Faceit}
        else if(FaceitSkillLevel == 7){FaceitSkillLevel = emoji.Level7Faceit}
        else if(FaceitSkillLevel == 8){FaceitSkillLevel = emoji.Level8Faceit}
        else if(FaceitSkillLevel == 8){FaceitSkillLevel = emoji.Level9Faceit}
        else if(FaceitSkillLevel == 8){FaceitSkillLevel = emoji.Level10Faceit}
        return FaceitSkillLevel
    },
    
     GetRecentGames : function getRecentGame(responseStats){
        let games = ''
        responseStats.lifetime['Recent Results'].forEach(game => {
            if (game == 1){
                games += '🟢'
            }
            else{
                games += '🔴'
            }
        });
        return games
    } 
    
}