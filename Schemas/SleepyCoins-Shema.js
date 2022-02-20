const mongoose = require('mongoose')


const SleepyCoinsSchema = mongoose.Schema({
    Nickname: String,
    id: String,
    SleepyCoins: Number,
})

module.exports = mongoose.model('SleepyCoins-Shema', SleepyCoinsSchema);