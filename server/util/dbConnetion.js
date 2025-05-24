const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://pyatlosaikumar:pyatlosaikumar@cluster0.y7thqz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("database is connected..");

    } catch (error) {
        console.log(error);


    }

}

module.exports = {
    connectDB
}