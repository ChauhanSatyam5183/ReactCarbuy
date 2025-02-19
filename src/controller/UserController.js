const{AddUser}=require("../Service/UserService");

async function UserAdd(req,res){
    console.log("usercontroller");

    try{
      const response=await AddUser(req.body);

      return res.status(200).json({
        message:"User Created",
        data:{response},
        success:true,
        error:{}
      })
    }catch(error){
        return res.status(401).json({
            message:error,
            data:{},
            success:false,
            error:{error}
          })
    }
};
module.exports={
    UserAdd
}
