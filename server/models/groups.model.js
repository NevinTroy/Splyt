const mongoose=require('mongoose');
const {Schema, model} = mongoose;

const groupSchema=new Schema({
    groupName: String,
    members:[{
        memberId: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Group=model('Group',groupSchema);

module.exports=Group;