const express = require("express")
const path = require("path")
const ejs = require("ejs")
const DB = require("./Database")
const DB1 = require("./Database1")
const DB2 = require("./database2")
const app = express()
const address = path.join(__dirname,"/public")
app.set("view engine","ejs")
app.use(express.static(address))
app.get("/",async(req,resp)=>{

    const connection = await DB();
    const collection = connection.collection("food_items");
    let data = await collection.find().toArray();
    const conn = await DB1();
    const cll = conn.collection("BreakFast");
    let info = await cll.find().toArray();
    const coll = connection.collection("Images");
    let images = await coll.find().toArray();
    resp.render("Home",{data,images,info})

})




app.get("/gallery",async(req,resp)=>{
    const connection = await DB();
    const coll = connection.collection("Images");
    let images = await coll.find().toArray();
    resp.render("gallery",{images})
    
})

app.get("/car",async(req,resp)=>{
    const connection = await DB2();
    const coll = connection.collection("mahindra");
    let data = await coll.find().toArray();
    resp.render("car",{data})
})

app.listen(10000)
