const mongoose = require("mongoose")

const initializeDBConnection = async () => {
  
  const uri = "mongodb+srv://VarenAdmin:fR-Y34vRbHggMuP@cluster0.nos4a.mongodb.net/inventory?retryWrites=true&w=majority"
  
  try{
    await mongoose.connect(uri , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongoose connection succesfull");

  }catch(err){
    console.error({message : "mongoose connection failed" , errorMessage : err.message})
  }
}

module.exports = initializeDBConnection