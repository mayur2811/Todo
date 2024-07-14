const express = require("express");
const {createTodo,deleteTodo,updateTodo,getTodo}= require("../controller/index");

const router =  express.Router();

router.post('/createTodo',createTodo);

router.put('/updateTodo/:id',updateTodo);

router.get('/getTodo/:id',getTodo);

router.post('/deleteTodo/:id',deleteTodo);

module.exports = router;