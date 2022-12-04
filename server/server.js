const express=require('express');
const dotenv = require('dotenv');
const cors=require('cors');
const mongoose= require('mongoose');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const app=express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

const User=require('./models/users.model')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});  

app.post('/createUser',(req,res)=>{
    const newUser =new User(req.body);
    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json('Error: '+err));
})

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at ${process.env.PORT}`)
});
