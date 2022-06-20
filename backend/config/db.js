require("dotenv").config();
const mongoose = require("mongoose");

// const url = 'mongodb+srv://saurav:Jaypee1234@cluster0.fpwqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const url='mongodb+srv://abhay:connecteasy@cluster0.yxshc.mongodb.net/myfirstdatabase?retryWrites=true&w=majority';
// mongodb+srv://saurav:EjCLf2h26RQfrY2@cluster0.fpwqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    console.log(error)
    // console.log(process.env.MONGO_URI)
    process.exit(1);
  }
};

module.exports = connectDB;
