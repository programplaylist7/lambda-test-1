import mongoose from "mongoose";
let isConnected = false; // ⭐ ADDED — connection cache

export const connectDB = async () => {
  if (isConnected) return; // ⭐ ADDED — reuse existing connection
  try {

    const db = await mongoose.connect(process.env.MONGO_URL);
    isConnected = db.connections[0].readyState; 
    console.log("db connection successFully");
  } catch (err) {
    console.log("db connection error: ", err.message);  
    process.exit(1);
  }
};

