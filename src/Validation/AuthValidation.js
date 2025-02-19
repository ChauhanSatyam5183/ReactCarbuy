const jwt=require("jsonwebtoken");

const{JWT_SECRET}=require("../config/servercofig");




async function isloggedin(req,res,next) {

    console.log(req.cookies['authtoken']);

    const token=req.cookies['authtoken'];

    if(!token){
        return res.status(401).json({
            success:false, 
            data:{},
            error:"NOt Authenticated",
            message:"Not Auth Token Provided"
        });
    }

    //handle token may opr expire
   try{
    const decode=jwt.verify(token,JWT_SECRET);
    if(!decode){
        throw{reason:"Unauthroized ",statusCode:401};
    }
    req.user={
        Email:decode.Email,
        id:decode.id,
        role:decode.role

    }

    next();
   }catch(error){

   }
    
   
    
    
}
//this function check user is admin or not
 function isAdmin(req,res,next) {
const loggedinuser=req.user;
if(isloggedin.role==="ADMIN"){
    next();
}
else{
    return res.status(401).json({
        success:false,
        data:{},
        message:"You are not authorized",
        error:{
            statuscode:401,
            reason:"Unauthorized for this action"
        }
    })
}


    
}
module.exports={
    isloggedin,
    isAdmin
}