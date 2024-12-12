// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/",(req,res)=>{
//     res.send("HELLO EVERYONE!!!????");
// })

// app.listen(PORT,()=>{
//     console.log('Server is running on http://localhost:3000');
// })

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// app.get("/",(req,res)=>{
//         res.sendfile(path.join(__dirname,"Views","index.html"));
//     })

// app.use(express.static(path.join(__dirname,"Views")));

app.use((req,res,next)=>{
    const secretcode = req.query.secretcode;
    req.isAuthorized = secretcode==='1234';
    next();
});

app.get("/",(req,res)=>{
    if(req.isAuthorized){
        res.sendfile(path.join(__dirname,"Views","index.html"));
    }
    else{
        res.send("unauthorized Access");
    }
});

app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000');
})