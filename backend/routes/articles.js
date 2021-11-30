const express = require('express')
const app= express()
const router = express.Router()

//Artice Model
const Article = require('./../models/article')

// Get All Blogs
router.route('/').get((req, res) => {
    Article.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })


// Create New Blog
router.route('/').post((req, res, next) => {
    Article.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

// Get single Blog
router.route('/read/:id').get((req, res) => {
    Article.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Update Blog
router.route('/update/:id').put((req, res, next) => {
    Article.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })

//Delete Blog
router.route('/delete/:id').delete((req, res, next) => {
    Article.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

// Like Blog
router.route('/like/:id').put((req, res, next) => {
  var d= req.body;
  d.likes +=1
  
  Article.findByIdAndUpdate(req.params.id, {
    $set: d
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

  router.post('/like/:id', async(req, res) => {
    const article = await Article.findById(req.params.id)
    article.likes += 1;
    article.save();
    res.redirect(`/articles/${article.id}`)
})
  module.exports = router ;

  