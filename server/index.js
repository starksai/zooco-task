const express = require('express')
const cors = require('cors')
const app = express()

const { connectDB } = require('./util/dbConnetion.js')
const { ReminderRoute } = require('./Routes/Reminder.route.js')

const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("db data fetching.....")

})

app.use("/api", ReminderRoute)

app.listen(`${PORT}`, async () => {
    console.log(`server is running in http://localhost:${PORT}`);

    await connectDB()

})