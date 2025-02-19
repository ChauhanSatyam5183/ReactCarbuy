const express=require('express');
const {UserAdd}=require('../controller/UserController');

const UserRouter=express.Router();

UserRouter.post("/",UserAdd); 

module.exports=UserRouter;
