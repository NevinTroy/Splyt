const mongoose=require('mongoose');
const {Schema, model}=mongoose;

const billSchema=new Schema({
    BillName:{
        type:String,
        required:true
    },
    Spender:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    Borrower:[{
        type:Schema.Types.ObjectId,
        ref:'User',
        amount:double
    }],
    total: double,
    time: Timestamp,
    items:[{
        itemName: String,
        price: double
    }]
})

const Bill=model('Bill',billSchema);
module.exports=Bill;