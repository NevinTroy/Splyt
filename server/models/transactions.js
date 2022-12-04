const mongoose=require('mongoose');
const {Schema, model} = mongoose;

const transactionSchema=new Schema({
    source:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    destination:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    transactions:[
        {
            timestamp: Timestamp,
            amount: integer,
            paid:{
                type:Boolean,
                default: false
            }
        }
    ],
    total:double
})

const Transaction=model('Transaction',transactionSchema);
module.exports=Transaction;