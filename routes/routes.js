 const express = require('express');
 const router = express.Router();
 const user=require('../model/user')
 const post=require('../model/post')
 //const comment=require('../model/coment')

//  router.post('/post',async (req,res)=>{
//         try{
//             console.log('aa',req.body)
//             const posts=new post({
//                 name:req.body.name,
//                 email:req.body.email
                
//             });
//             const result = await posts.save()
//             res.status(200).json(result)
//         }
//         catch(error){
//             res.status(500).json({error:error.message})
//         }
        
//     })

//     router.post('/user',async (req,res)=>{
//         try{
//             console.log('aa',req.body)
//             const users=new user({
//                 postid: req.body.postid,
//                 email: req.body.email
                
                
//             });
//             const result = await users.save()
//             res.status(200).json(result)
//         }
//         catch(error){
//             return res.status(500).send({ error: 'Failed to create right' });
//         }
        
  //  })
    // router.post('/userget', async (req, res) => {
    //     try {
    //         console.log('aa',req.body)
    //         const newUser = new user({
    //             _id: req.body.user_id
    //         }).populate('postid')
    //         const result = await newUser.save()
    //         res.status(200).json(result)
    //     } catch(error) {
    //         return res.status(500).send({ error: 'Failed to create user' })
    //     }
    // })
    
//postbyuser
// router.post('/userpost', async(req,res)=>{
//     try{
//         const right =await user.find({_id:req.body.user_id}).populate('postid')
//         res.send(right)
//     }
//     catch(err){
//         res.send(err)
//     }
// })
// router.post('/userget', async(req,res)=>{
//     try{
//         const right =await user.save({_id:req.body.user_id}).populate('postid')
//         res.send(right)
//     }
//     catch(err){
//         res.send(err)
//     }
// })

//     router.post('/comment',async (req,res)=>{
//         try{
//             console.log('aa',req.body)
//             const comments=new comment({
//                 name:req.body.name,
//                 email:req.body.email
                
//             });
//             const result = await comments.save()
//             res.status(200).json(result)
//         }
//         catch(error){
//             res.status(500).json({error:error.message})
//         }
        
//     })



 //const Staf=require('../controlr/stafcontrol')
 //const right=require('../controlr/right')
 //router.post('/staff/create',Staf.create)
 //router.post('/right/create',right.create)

 




// const Student = require('../model/model')

// router.get('/student', async(req,res)=>{
//     try{
//         const student =await Student.find()
//         res.send(student)
//     }       
//     catch(err){
//         res.send(err)
//     }

// })
//search api
// router.get("/stdent/:key",async(req,res)=>{
//     console.log(req.params.key)
//     let data=await Student.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"category":{$regex:req.params.key}}

//             ]
//         }
//     )
//     res.send(data)
// })

// router.put('/update/:_id', async(req,res)=>{
//     let data = await Student.updateOne(
//         req.params,
//         {$set:req.body}
//     )
//     res.send(data)
// })
// router.delete('/delete/:_id', async(req,res)=>{
//     let data = await Student.deleteOne(
//         req.params,
//         {$set:req.body}
//     )
//     res.send(data)
// })

// // router.get('/:id', async(req,res)=>{
// //     try{
// //         const student =await Student.findById(req.params.id)
// //         res.send(student)
// //     }
// //     catch(err){
// //         res.send(err)
// //     }

// // })
// router.post('/student',async (req,res)=>{
//     try{
//         console.log('aa',req.body)
//         const student=new Student({
//             name:req.body.name,
//             age:req.body.age,
//             category:req.body.category

//         });
//         const result = await student.save()
//         res.status(200).json(result)
//     }
//     catch(error){
//         res.status(500).json({error:error.message})
//     }
    
// })
 module.exports=router;