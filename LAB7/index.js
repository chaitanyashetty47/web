var express = require('express');
const app = express();
const port = 9000;

app.get('/',(req,res)=>{res.send('Hello World, I am Chaitanya from express...')});
app.listen(port,()=>console.log(`Hello World app listening on port ${port}!`));