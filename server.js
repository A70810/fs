require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(express.json()); 

// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/users', require('./routes/userRouter'))



// Connect to MongoDB
const URI = "mongodb+srv://A70810:Tripathi@cluster0.cucjics.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Start your server or perform other operations
    // ...
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectToDatabase();


const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})