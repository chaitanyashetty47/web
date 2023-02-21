const express = require("express");
const app = express();
const port = 3001;
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
const moongoose = require("mongoose");

app.set('view engine','ejs');
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://chaitanya:Chai123@cluster0.rmyticc.mongodb.net/?retryWrites=true&w=majority";


const studentSchema = {
    id:Number,
    name:String,
    department:String,
}
const Student = moongoose.model('students',studentSchema); //students is collection

async function fetch1(){

        
    
    try{
        await moongoose.connect(uri);
        console.log("Conneceted to mongoDb");
        app.get('/',(req,res)=>{
            Student.find({},function(err,student){
                res.render('index',{
                    studentList:student
                })
            })


        })

    }
    catch(error){
        console.log(error)
    }



}

fetch1()


app.post('/',function(req,res,next){
    const data = new Student({
    
        id:req.body['id'],
        name:req.body["name"],
        department:req.body["department"]
    }

    )

    data.save(function(err,data){
        if(err)return console.error(err);
    })
    res.send("data has been added succesfully");

})




app.delete("/:id",async(req,res)=>{
    const id =req.params.id
    Student.findOneAndRemove({id:id},function(err){
        if (err) return res.send({ error: err });
        res.send({ message: "id has been  deleted successfully!" });
    })

    
    
    res.send("specified ID has been deleted");
})


//http://localhost:3001/update/123
app.put("/update/:id",async(req,res)=>{
    const id =req.params.id

   let  name=req.body["name"];
   let department=req.body["department"]
    Student.findOneAndUpdate({id:id},{$set:{name:name,department:department}},{new:false},function(err,data){
        if (err) return res.status(500).send(err);
        if(data == null){
            res.send("nothing found")
        }
        else{
        }
        res.send("data has been updated");

    })
})

app.use("/deleteAll",async(req,res)=>{
    Student.collection.drop((err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Collection dropped successfully');
        }
    });
    res.send("entire data has been deleted");
})
app.use(express.json());
app.use('/po',router);
app.use(express.static((__dirname)+'/views'))
app.listen(port,()=>{
    console.log(`Student app listening at http://localhost:${port}`);
})