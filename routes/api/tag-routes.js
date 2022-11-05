const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: 'tags_product' }],
  })
    .then(tags => res.json(tags))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }) 
});

// GET a tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product, through: ProductTag, as: 'tags_product' }],
  })
  .then((tagData) => {
    res.json(tagData);
  })

});

// CREATE a new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

// UPDATE a tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

// DELETE a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteTag) => {
      res.json("Success!");
    })
    .catch((err) => res.json(err));
});

module.exports = router;
