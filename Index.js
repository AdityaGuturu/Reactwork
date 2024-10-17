const express = require("express")
const path = require("path")
const ejs = require("ejs")
const DB2 = require("./database2")
const app = express()
const address = path.join(__dirname,"/public")
app.set("view engine","ejs")
app.use(express.static(address))
const https = require('https');

https.get('https://your-service-url.com', { rejectUnauthorized: false }, (res) => {
});

app.get("/car",async(req,resp)=>{
    const connection = await DB2();
    const coll = connection.collection("mahindra");
    let data = await coll.find().toArray();
    resp.render("car",{data})
})

const port = process.env.PORT || 10000;  // Use the port from the environment

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
