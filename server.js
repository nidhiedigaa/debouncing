require('dotenv').config()

const express=require('express')


const app=express()
app.use(express.static('views'))


const PORT=process.env.PORT || 1111
app.listen(PORT,()=>console.log(`server is running on ${PORT} `))