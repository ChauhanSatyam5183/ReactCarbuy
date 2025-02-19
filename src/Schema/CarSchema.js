const mongoose=require('mongoose');

const CarSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    BrandName: {
        type: String,
        required: [true, "Please enter BrandName"],
    },
    FuelType: {
        type: String,
        enum: ["CNG", "PETROL", "DIESEL","EV"],
        default: "PETROL"
    },
    RegistrationNumber: {
        type: String,
        required: [true, "Please enter Car number"],
        unique:true
    },
    RegistrationCity: {
        type: String,
        required: [true, "Please enter City"],
    },
    KiloDriven: {
        type: Number,
        required: [true, "Please enter Kilometer driven"],
    },
    OwnerSerial: {
        type: Number,
        required: [true, "Please enter Owner Serial"],
    },
    BodyType:{
       type:String,
       enum:["HatchBack","Sedan","SUV","MPV","COUPE"],
       required:[true,"plaese eneter BodyType"]
    },
    Transmission:{
     type:String,
     enum:["Manual","CVT","AMT"],
     required:true,
     default:"Manual"
    },
    Price: {
        type: Number,
        required: [true, "Please enter Price"]
    },
    Images: [String] // Array of image URLs
}, {
    timestamps: true
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;