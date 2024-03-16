const mongoose = require('mongoose')
let compass_url = 'mongodb://localhost:27017/sample'

let mongodb_url='mongodb+srv://Sameo:Sameo@cluster0.5ogrmu3.mongodb.net/FirstDB?retryWrites=true&w=majority&appName=Cluster0'

mongoose
.connect(mongodb_url)
.then(() => {
    console.log("DB connected")
})
.catch((err) => {console.log(err);})
