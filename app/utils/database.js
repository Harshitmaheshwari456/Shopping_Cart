import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already MongoDB connected...!");
    return;
  }

  mongoose
    .connect(
      "mongodb+srv://harshitmaheshwari456:HeGNuOQxjAZJnMil@cluster0.k46crea.mongodb.net/"
    )
    .then((msg) => console.log("MongoDB Connected Successfully....!"))
    .catch((err) => console.log(err.message));
};

export default connectDB;
