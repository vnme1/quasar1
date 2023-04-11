const router = require('express').Router();
const todoController = require('./_controller/todoController');
router.get('/', async (req,res)=>{
    const result = await todoController.getTest();
    res.json(result);
})

module.exports = router;
