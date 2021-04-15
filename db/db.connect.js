const mongoose = require("mongoose")

const initializeDBConnection = async () => {

  try{
    await mongoose.connect(process.env.MONGO_DB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongoose connection succesfull");

  }catch(err){
    console.error({message : "mongoose connection failed" , errorMessage : err.message})
  }
}

module.exports = initializeDBConnection