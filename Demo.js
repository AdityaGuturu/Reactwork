const express = require("express")
const path = require("path")
const ejs = require("ejs")
const db = require("./demoDb")
const { ObjectId } = require("mongodb")
const app = express()
const address = path.join(__dirname,"/public")
app.set("view engine","ejs")
app.use(express.static(address))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/",async(req,resp)=>{

    const connection = await db();
    const collection = connection.collection("toys");
    let data = await collection.find().toArray();
    resp.render("demo",{data})

})
app.get("/demo1",async(req,resp)=>{

    const connection = await db();
    const collection = connection.collection("toys");
    let data = await collection.find().toArray();
    resp.render("demo1",{data})

})
app.get("/item/:id",async(req,resp)=>{
    const id = req.params.id;
    const connect = await db();
    const coll = connect.collection("toys");
    const data = await coll.findOne({ _id: new ObjectId(id) });
   resp.render("reload",{data})
})

app.post("/input",async(req,resp)=>{

    const connection = await db();
    const collection = connection.collection("toys");
    let data = await collection.insertOne(req.body);
    resp.send("Success")
})

app.listen(5000)
// db - > backend -> front end
// frontend -> backend -> db -> post

// api -> backend -> db