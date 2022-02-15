module.exports = {
     trimtext: function trim(input){
        return input.length > 1024 ? `${input.slice(0, 1020)} ...`: input;
    }
}