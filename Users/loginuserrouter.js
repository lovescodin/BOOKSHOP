const express = require("express");
LoginUserRouter=express.Router();
const { UserModel } = require("./user.model");

LoginUserRouter.post("/Login", async (req, res) => {
try{


    const { Email,Password } = req.body;
   
    if ( !Email || !Password ) {
      return res.status(401).send({ message: "All fields are required" });
    }
  
    const checkUser = await UserModel.findOne({ Email,Password });
    console.log("check", checkUser);
  
    if (checkUser) {
      return res.status(200).send({ message: "Successful login",data: checkUser.Email});
    }
    else{
    return res.status(401).json({ message: "Login failed!!!",data:null });
    }
}
catch(error){
    return res.status(500).json({ message: "Server Error",error:error.message });
}
  
  });


  module.exports ={LoginUserRouter}