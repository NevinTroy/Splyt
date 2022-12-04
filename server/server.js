const express=require('express');
const cors=require('cors');
const mongoose= require('mongoose');

const app=express();

mongoose.connect("connection URL");
const User=require('./models/users.model')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get('/',(req,res)=>{
    res.json(`hello`)
});

app.post('/createUser',(req,res)=>{
    // console.log(req.body);
    const newUser =new User(req.body);
    newUser.save()
        .then(() => res.json(newUser.friends[0].username))
        .catch(err => res.status(400).json('Error: '+err));
})

app.listen(3000,()=>{
    console.log(`Server running`)
});
