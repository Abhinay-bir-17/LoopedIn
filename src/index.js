// require("dotenv").config({path: "./.env"});
import dotnev from "dotenv";
import connectDB from "./db/db.js";

dotnev.config({path: "./.env"});


connectDB()

// 1st approach is below
/*

import express from "express";
const app = express();

;(async ()=>{
  try{
    await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })

  }catch(e){
    console.log("ERROR:",e);
    throw e;
  }
})()
*/