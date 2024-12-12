const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.sendfile(__dirname+"/Views/index.html");
    app.use(express.static(__dirname+"/Views"))
})

app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000');
})