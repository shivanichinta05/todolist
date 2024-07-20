const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const express =require("express")
const channelModel=require("./model/channel")

const app=express();
const port=5600

const dburl="mongodb+srv://shivani:shivani03@shiv.tptlcmd.mongodb.net/?retryWrites=true&w=majority&appName=shiv"

app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyparser.json())




mongoose
.connect(dburl)
.then(()=>{
    console.log("connected succesfully")
})
.catch(()=>{
    console.log("Error occured while connecting")
})


app.listen(port,()=>{
    console.log(`listening at a port ${port}`);
})

app.get('/',(req,res)=>{
    channelModel.find()
    .then(result=>{
        res.render("index",data=result)

    })
    
})

app.post('/',(req,res)=>{
     var ChannelModel=new channelModel()
     ChannelModel.todo=req.body.Todo;
     ChannelModel.save();
     res.redirect('/')
})