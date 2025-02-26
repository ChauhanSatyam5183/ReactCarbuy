const express = require("express");
const CarController = require("../controller/CarController");
const{isloggedin,isAdmin}=require("../Validation/AuthValidation");
const router = express.Router();

// Route to create a new car
router.post("/",isloggedin,isAdmin, CarController.createCar);

// Route to delete a car by ID
router.delete("/:id",isloggedin,isAdmin, CarController.deleteCarById);

// Route to get a car by ID
router.get("/:id",isloggedin, CarController.getCarById);



router.get("/filter/jk",CarController.filterfind);

module.exports = router;
