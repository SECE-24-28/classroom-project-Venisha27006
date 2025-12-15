const express=require('express')
const app=express()
const PORT=8001 

app.get('/',(req,res)=>{
    res.send('Backend server is running successfully')
})

app.get('/json',(req,res)=>{
    res.json({
        "hi":"sece",
        "branch":"cys",
        "stuCount":"64"


})
    })

app.get('/html',(req, res)=>{
    res.sendFile("C:/Users/thila/Desktop/node/MERN_Backend/index.html")
})    

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})