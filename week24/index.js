const express = require("express")
const port = 3000
const app = express();

app.get('/',(req,res)=>{
    res.send("Right Hand Club is best")
})
app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`)
})