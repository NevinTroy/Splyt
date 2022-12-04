const mongoose=require('mongoose');
const {Schema, model} = mongoose;

const friendSchema=new Schema({
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

//up for discussion