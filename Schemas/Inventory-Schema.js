const mongoose = require('mongoose')

const InventorySchema = mongoose.Schema({
    Nickname: String,
    id: String,
    SleepyCoins: Number,
    Inventory: Object,
    
})

module.exports = mongoose.model('Inventory-Schema', InventorySchema)