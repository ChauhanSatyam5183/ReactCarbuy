const express=require('express');
const{login}=require("../controller/AuthController");

const AuthRouter=express.Router();

AuthRouter.post("/",login);

module.exports=AuthRouter;
