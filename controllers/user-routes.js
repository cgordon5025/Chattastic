const router = require('express').Router();
const { User, Post } = require('../models');



// get all users
router.get('/', async (req, res) => {
    // find all users
    try {
      const allUserData = await User.findAll({include: Post});
      res.status(200).json(allUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get one users
router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const userIdData = await User.findByPk(req.params.id, {
        // JOIN with Post
        include: Post
      });
  
      if (!userIdData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userIdData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create new user
// router.post('/', async (req, res) => {
//     //  req.body should look like this...
  
//     // {
//     //     product_name: "Basketball",
//     //     price: 200.00,
//     //     stock: 3,
//     //     tagIds: [1, 2, 3, 4]
//     //   }
  
//     User.create(req.body)
//       .then((user) => {
//         // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//         if (req.body.tagIds.length) {
//           const productTagIdArr = req.body.tagIds.map((tag_id) => {
//             return {
//               product_id: product.id,
//               tag_id,
//             };
//           });
//           return ProductTag.bulkCreate(productTagIdArr);
//         }
//         // if no product tags, just respond
//         res.status(200).json(product);
//       })
//       .then((productTagIds) => res.status(200).json(productTagIds))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   });



  module.exports = router;