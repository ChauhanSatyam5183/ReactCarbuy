const {JWT_EXPIRY,JWT_SECRET}=require("../config/servercofig")

const{FindUser}=require("../Repository/UserRepository");

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

async function userLogin(authDetail) {

    console.log("LoginService",authDetail)
    const Email=authDetail.Email;
    const Plainpassword=authDetail.Password;
     

     const user=await FindUser({Email});
     if(!user){
        throw{message:"No user Found with this Email",statusCode:404};
     }

     const ispasswordvalid=await bcrypt.compare(Plainpassword,user.Password);

     if(!ispasswordvalid){
        throw{message:"Wrong Password please enter correct Password",statusCode:401};
     }
   
    
     const userrole=user.role?user.role:"USER";
     
     const token = jwt.sign({ email: user.email, id: user._id,role:userrole }, JWT_SECRET, { expiresIn: JWT_EXPIRY });


     return token;    
    
}
module.exports={
    userLogin
}