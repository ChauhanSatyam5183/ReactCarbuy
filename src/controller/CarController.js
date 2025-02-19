const CarService = require("../Service/CarService");

async function createCar(req, res) {

    console.log("CarController");
    try {
        const car = await CarService.createCar(req.body);
        return res.status(201).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

async function deleteCarById(req, res) {
    try {
        const car = await CarService.deleteCarById(req.params.id);
        return res.status(200).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}


async function getCarById(req, res) {
    try {
        const car = await CarService.getCarById(req.params.id);
        return res.status(200).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

async function filterfind(req,res) {
    
    console.log("car Controller");
        
    try {
        
        const cars = await CarService.findcars(req.query);
        return res.status(200).json({ success: true, data: cars }); // Fixed response
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}
module.exports = {
    createCar,
    deleteCarById,
    getCarById,
    filterfind
};
