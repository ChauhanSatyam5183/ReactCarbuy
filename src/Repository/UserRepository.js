const User=require("../Schema/UserSchema");

async function createuser(UserDetail) {
    console.log("useRepo");
   console.log(UserDetail);
    try {
        const response=await User.create(UserDetail);
         
        return response;
    } catch (error) {
        console.error("Error creating car:", error); // Log the actual error
        throw { reason: error.message || "Cannot create car", statusCode: 401 };
    }
    
}


async function FindUser(params) {
    try {
        const response = await User.findOne({ ...params });
        return response;  
    } catch (error) {
        console.error("Error finding user:", error);
        throw error;
    }
}

module.exports = { 
    createuser,
     FindUser };