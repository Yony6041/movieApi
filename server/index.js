const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 5000;
const URL_MONGO = "mongodb+srv://yony:cintaRoja123@cluster0-n56xu.mongodb.net/test?retryWrites=true&w=majority"

const movies = require("./controllers/movies.js")

app.use(express.json());
app.use('/movies', movies);
app.use(cors());

mongoose.connect(URL_MONGO,{useNewUrlParser: true, useUnifiedTopology: true},(error) =>{
    if(!error){
        console.log("Connected to MongoDB")
    }else{
        console.log(error)
    }
}) 

app.listen(PORT,() =>{
    console.log(`the server is on PORT ${PORT}`)
})