var expressFunction = require('express')
const router = expressFunction.Router()
const authorization = require('../config/authorize')
const mongoose = require('mongoose')

var Schema = require("mongoose").Schema
const contactSchema = Schema({
    userId:String,  
    name: String,
    email: String,
    subject: String,
    message: String

},{
    coolection:'contacts'
})
let Contact
try{
    Contact=mongoose.model('contacts')
}catch(error){
    Contact=mongoose.model('contacts',contactSchema)
}

const insertContact = (dataContact)=>{
    return new Promise((resolve, reject) => {
        var new_contact = new Contact(
            dataContact
        )
        new_contact.save((err,data)=>{
            if(err){
                reject(new Error('Cannot insert contact to DB!!!'))
            }else{
                resolve({message:'contact added successfully'})
            }
        })
    })
}

const contactPut = (contactData) =>{
    return new  Promise((resolve, reject)=>{
        Contact.findOneAndUpdate({userId:contactData.userId},{name:contactData.name,email:contactData.email,subject:contactData.subject,message:contactData.message },(err,data)=>{
            if(err){
                reject(new Error('Cannot put contact !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot put contact !!!'))
               }
            }
        })
    })
}

const getContactById = (id) =>{
    return new  Promise((resolve, reject)=>{
        Contact.find({userId:id},(err,data)=>{
            if(err){
                reject(new Error('Cannot get contact !!!'))
            }else{
               if(data){
                   resolve(data)
               }else{
                reject(new Error('Cannot get contact !!!'))
               }
            }
        })
    })
}

router.route('/add').post((req,res)=>{
    let playload ={
        userId : req.body.userId,
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    }
    insertContact(playload).then(result =>{
       console.log(result);
       res.status(200).json(result)
   }).catch(err=>{
       console.log(err);
   })
})

router.route('/put').put(authorization,(req,res)=>{
    console.log(req.body);
    contactPut(req.body).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})

router.route('/get/:id').get(authorization,(req,res)=>{
    getContactById(req.params.id).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
    })
})



module.exports = router