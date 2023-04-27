const router = require('express').Router();
const studentController = require('./_controller/studentController');

// create
router.post("/", async (req, res) => {
  const result = await studentController.create(req);
  res.json(result);
});

// list
router.get('/', async (req,res)=>{
  const result = await studentController.list(req);
  res.json(result);
})

// update
router.put('/:id', async (req,res)=>{
  const result = await studentController.update(req);
  res.json(result);
})

// delete
router.delete('/:id', async (req,res)=>{
  const result = await studentController.delete(req);
  res.json(result);
})

// truncate, dummy insert
router.post('/reset', async (req,res)=>{
  const result = await studentController.reset(req);
  res.json(result);
})


module.exports = router;
