const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
const jwt = require('jsonwebtoken');


app.post('/login',(req,res)=>{
    console.log(req.body)
    try{
        const {email,password} = req.body;
    
        const token = jwt.sign({ email: email, password:password }, 'your-secret-key', {
            expiresIn: '1h',
        });
    
        if(token){
            return res.status(200).json({jwt:token});
        }else{
            return res.status(400).send("Cannot authenticate");
        }
    }catch(ex){
        return res.status(500).send("Server error");
    }
})

app.listen(3333,()=>{
    console.log("Server Started");
})