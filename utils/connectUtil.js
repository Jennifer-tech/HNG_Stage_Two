const mongoose =  require("mongoose");

const connectDb = async () => {
    const MONGO_URI = process.env.MONGODB_URI_offline ;
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => {
        console.log('Database Connected!!!')
    })
    .catch((err) => {
      process.exit(1);
    })
  };


// create a model from schema and export it
module.exports = connectDb;