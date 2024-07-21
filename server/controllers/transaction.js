import User from "../models/User.js";
import Transaction from "./../models/Transaction.js"

const PostTransaction = async (req ,res) =>{
    const {amount , category ,type , user,title} = req.body;

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user
    });

    try{
        const savedTransaction = await transaction.save();

        res.json({
            success :true,
            message : `Transaction Successfull`,
            data :savedTransaction
        })
    }
    catch(e){
        res.json({
            success :false,
            message :e.message,
            data:null
        })
    }
}

const getTransaction = async(req,res) =>{
    const { userId } = req.query;

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success:true,
            message :`User Not Found`,
            data:null
        })
    }

const transactions = await Transaction.findOne({user : userId })

res.json({
    success :true,
    message:"Transaction Fetched Successfully",
    data :transactions
})
}

export{
    PostTransaction,
    getTransaction
}