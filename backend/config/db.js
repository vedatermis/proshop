import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/ProShop', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;
