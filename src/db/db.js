import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try{
    // mongoose returns a promise below
    // connectionInstance is an object that contains the connection information
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    // print connectionInstance in console.

  }

  catch(e){
    console.log("MONGODB CONNECTION ERROR:",e);
    process.exit(1) // process is provided by nodejs, look at these codes '1'
  }
}
export default connectDB;