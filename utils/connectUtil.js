const mongoose = require("mongoose");

const connectDb = async () => {
  const MONGO_URI = "mongodb+srv://muofunanyajennifer1:Jenny07082001@cluster0.ngrxvpo.mongodb.net/";
  await mongoose.connect(MONGO_URI)
    .then(() => {
      console.log('Database Connected!!!')
    })
    .catch((err) => {
      console.log('Database error!!!')
      process.exit(1);
    })
};


// create a model from schema and export it
module.exports = connectDb;