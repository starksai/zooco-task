const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')

const { connectDB } = require('./util/dbConnetion.js')
const { ReminderRoute } = require('./Routes/Reminder.route.js')

dotenv.config()

const PORT = process.env.BACKEND_PORT


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("db data fetching.....")

})

app.use("/api", ReminderRoute)

app.listen(`${PORT}`, async () => {

    await connectDB()

    console.log(`server is running in http://localhost:${PORT}`);
})