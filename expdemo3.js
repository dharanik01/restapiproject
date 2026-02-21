
const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/mydharani").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})

 
async function dis()
 {
    try{
        const result=await User.findById("697c4ff46e62e56956b51490")
        console.log(result)
    }
    catch(e){
        console.log(e.meesage)
    }
}
dis()

