const router = require('express').Router();
const studentController = require('./_controller/studentController');
router.get('/', async (req,res)=>{
    const result = await studentController.getsTest();
    res.json(result);
})

// create
router.post("/", async (req, res) => {
  const result = await studentController.create(req);
  res.json(result);
});

module.exports = router;
