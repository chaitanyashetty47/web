const express = require('express')
const router = express.Router()
const StudentModel = require('../models/studentm')

router.get('/',async(req,res) => {
  try{
    const students = await StudentModel.find()
    res.json(students)

  }catch(err){
    res.send('Error' + err)
  }
  
})

router.post('/',async(req,res) => {
  const student = new StudentModel({
    name: req.body.name,
    dept: req.body.dept
  }

  )
  try{
    const studentjson = await student.save()
    res.json(studentjson)

  }catch(err){
    res.send('Error' + err)
  }
  
})

module.exports = router