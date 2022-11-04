const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{ model: Product}, { model: ProductTag }, { model: Category }],
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
  Tag.findByPk({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product}, { model: ProductTag }, { model: Category }],
  })
  .then((tagData) => {
    res.json(tagData);
  })

});

// CREATE a new tag
router.post('/', async (req, res) => {
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
    .catach((err) => res.json(err));
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
      res.json(deleteTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
