const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const mongodb_url = process.env.MONOGODB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(mongodb_url);
        console.log("database is connected..");

    } catch (error) {
        console.log(error);


    }

}

module.exports = {
    connectDB
}