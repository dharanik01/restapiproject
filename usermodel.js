const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    sname:{
        type:String,
        required:true
    
},
age:{
    type:Number,
    required:true,
    min:18,
    max:100
},
addr:{
      type:String,
      required:true,
      uppercase:true
},
insertdAt:{
    type:Date,
    default:()=>Date.now()
},
city:{
    type:String,
    default:'karur'
}
})
const usrMdl=mongoose.model("date",UserSchema)
module.exports=usrMdl