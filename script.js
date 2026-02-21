const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/mydharani").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})

const myinp=new User({
    sname:"karthi",
    age:27,
    addr:"1/117,light house,esanatham,karur"

})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("Error:",err)
})