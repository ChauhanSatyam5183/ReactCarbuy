const{userLogin}=require("../Service/AuthService");


async function login(req, res) {

    console.log("login auth");
    try {
        const loginPayload = req.body;
        
         console.log(loginPayload);
        const response = await userLogin(loginPayload);

        // Set authentication cookie
        res.cookie("authtoken", response, { 
            httpOnly: true,
            secure:false, 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: { },
            error: {},
        });
    } catch (error) {
        return res.status(500).json({   //res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Login failed",
            data: {},
            error: {},
        });
    }
}

module.exports = {
    login,
};
