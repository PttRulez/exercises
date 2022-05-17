import mongoose from "mongoose";

export const connectDB = async () => {
  console.log('hello')
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (e) {
    console.error(`Error: ${e.message}`.red.underline.bold)
    process.exit(1)
  }
}