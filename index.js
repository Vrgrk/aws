const express=require('express')

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    console.log("Welcome AWS");
    res.send(`<h1>Welcome AWS</h1>`)  
})

const cash=[]


app.post('/givememoney',(req,res)=>{
  const  {name,amount}=req.body
  const person={name,amount}
  cash.push(person)
  res.status(201).json(cash)
  console.log("successfully Posted");
  
})



app.listen(3000,()=>{
    console.log(`Server is running inn the http://localhost:3000`);
    
})