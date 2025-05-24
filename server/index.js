const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const { ReminderModel } = require('./Model/reminder.model.js')

const { connectDB } = require('./util/dbConnetion.js')
const { ReminderRoute } = require('./Routes/Reminder.route.js')

dotenv.config()


const origin = process.env.FRONTEND_URL
const PORT = process.env.BACKEND_PORT


app.use(cors({
    origin: origin
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("db data fetching.....")
})

app.use("/api", ReminderRoute)

app.listen(`${PORT}`, async () => {

    await connectDB()

    console.log(`server is running in http://localhost:${PORT}`);
})