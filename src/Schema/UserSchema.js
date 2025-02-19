const mongoose=require('mongoose');

 const bcrypt=require('bcrypt');

const UserSchema=mongoose.Schema({
    
    Name:{
        type:String,
        required:[true,"Please enter LastName"],
    },
    PhoneNumber:{
            type:Number,
            required:[true,"Please Enter your Mobilenumber"],
            minlength:[10,"mobile number  be 10 length"],
            maxlength:[10,"mobile number  be 10 length"],
        },
        Email: {
            type: String,
            trim: true,
            unique: [true, "Email is already in use"],
            required: [true, "Email is required"],
            match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Email should be a valid email address"]
        },
        Password:{
            type:String,
            required:[true,"password shoulg be provided"],
            minlength:[6,"atleat 6 charcater password"]
        } ,
        role:{
            type:String,
            enum:["USER","ADMIN"],
            default:"USER"
        }
        
},{
    timestamps:true
});

UserSchema.pre('save',async function () {

    const hashpassword=await bcrypt.hash(this.Password,10);
    this.Password=hashpassword;
    
});

const User=mongoose.model("User",UserSchema);

module.exports=User;

