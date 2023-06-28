require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const patientRoutes = require('./routes/patientRoute')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

//routes
app.use('/api/patients', patientRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env

