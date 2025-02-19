const {createuser,FindUser}=require("../Repository/UserRepository");

async function AddUser(UserDetail) {
    console.log("userService");
   try{

   
    const user = await FindUser({
        Email: UserDetail.Email,  
        PhoneNumber: UserDetail.PhoneNumber
    });

    if (user) {
        throw { reason: "User already exists with this email or mobile number", statusCode: 401 };
    }
     // Create new user
     const newUser = await createuser({
        Email: UserDetail.Email,
        Name: UserDetail.Name,
        PhoneNumber: UserDetail.PhoneNumber,
        Password: UserDetail.Password  
    });

    if (!newUser) {
        throw { reason: "Something went wrong, user not created", statusCode: 500 };
    }

    console.log("New User Created:", newUser);



    return newUser;
} 
catch (error) {
    console.error("Error in CreateUser:", error);
    throw error;
}
  
    
}
module.exports={
    AddUser
}