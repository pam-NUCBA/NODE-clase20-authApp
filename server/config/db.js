import mongoose from "mongoose";

//db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("connected to atlas")
    );
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
