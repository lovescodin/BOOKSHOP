const express = require("express");
CreateUserRouter=express.Router();
const { UserModel } = require("./user.model");

CreateUserRouter.post("/NewUser", async (req, res) => {

    const { Name, Email,Password,PhoneNumber,Role,Gender } = req.body;
   
    if (!Name || !Email || !Password || !PhoneNumber|| !Role|| !Gender) {
      return res.status(401).send({ message: "All fields are required" });
    }
  
    const checkUser = await UserModel.findOne({ Email });
    console.log("check", checkUser);
  
    if (checkUser) {
      return res.status(401).send({ message: "User name already exists!!!" });
    }
  
    const newUser = new UserModel({ ...req.body });
    const insertedUser = await newUser.save();
    return res.status(201).json(insertedUser);
  });


  module.exports ={CreateUserRouter}