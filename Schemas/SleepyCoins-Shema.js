const mongoose = require('mongoose')


const SleepyCoinsSchema = mongoose.Schema({
    id: String,
    SleepyCoins: Number,
})

module.exports = mongoose.model('SleepyCoins-Shema', SleepyCoinsSchema);