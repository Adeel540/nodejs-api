// //const right=require('../model/rightmodel')

// module.exports = {
//     create: async (req, res) => {
//       try {
//         const newRight = new right({
//             staf_id: req.body.staf_id,
//             right: req.body.right
//         });
//         const rightData = await newRight.save();
//         return res.send(rightData);
//       } catch (err) {
//         return res.status(500).send({ error: 'Failed to create right' });
//       }
//     }
//   };

