const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product}],
    })
    .then(categories => {
      const simpCat = categories.map(function(cat) { return cat.get({plain: true}) });
      console.log(simpCat)
      console.table(simpCat)
      console.log(categories)
      res.json(categories)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
});

// GET a category
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk({
    where: {
      id: req.params.id,
  },
    inculde: [{ model: Product}],
  })
  .then((catageoryData) => {
    res.json(catageoryData);
  })
});

// CREATE a new category
router.post('/',  (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// UPDATE a category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});


// DELETE a category
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteCategory) => {
      res.json(deleteCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
