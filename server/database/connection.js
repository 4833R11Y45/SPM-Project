const dotenv = require('dotenv');
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB on localhost:27017 with the database name 'spm'
        const con = await mongoose.connect('mongodb://localhost:27017/spm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;
      