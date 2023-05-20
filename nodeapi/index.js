const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const apiserver = express();


//mongodb://127.0.0.1:27017/dada


connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dada');
  console.log("DB connected successfully");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

const User = mongoose.model('user', userSchema);


apiserver.use(cors())
apiserver.use(bodyParser.json())

//CRUD --> Create
apiserver.post("/demo",async(req,resp)=>{
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    await user.save();
    resp.json();
});

//CRUD --> Read
apiserver.get("/demo",async(req,resp)=>{
  const docs = await User.find({});
  resp.json(docs);
});

apiserver.listen(8080,()=>{
    console.log("apiserver running")
});