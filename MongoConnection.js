const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () =>{
  await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true
      }).then(res=>{
        console.log("SleepBot na Database")
      }).catch(err => {
        console.log(Error, err.message);
  })
  return mongoose
} 

