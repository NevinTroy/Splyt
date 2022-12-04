const mongoose=require('mongoose');
const {Schema, model} = mongoose;

const userSchema=new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        interests:[String]
    },
    password: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique: true,
    },
    interests:{
        diet:String,
        cuisine:[String]
    },
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
        friendUsername:String
    }]
});

const User=model('User',userSchema);

module.exports=User;