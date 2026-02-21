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
        const result=await User.exists({sname:"Dharani"})
        console.log(result)
    }
    catch(e){
        console.log(e.meesage)
    }
}
dis()

