const CarRepository = require("../Repository/CarRepository");

// Create a new car
async function createCar(CarDetail) {
    console.log("CARSERVICE");
    return await CarRepository.createCar(CarDetail);
}

// ✅ Delete a car by ID
async function deleteCarById(CarId) {
    return await CarRepository.deleteCarById(CarId);
}

// ✅ Fetch a car by ID
async function getCarById(CarId) {
    return await CarRepository.getCarById(CarId);
}

// ✅ Fetch cars by Name, BrandName, or RegistrationCity
async function getCarList(searchQuery) {
    return await CarRepository.getCarList(searchQuery);
}

// ✅ Fetch cars by FuelType
async function getCarsByFuelType(FuelType) {
    return await CarRepository.getCarsByFuelType(FuelType);
}

// ✅ Fetch cars by BodyType
async function getCarsByBodyType(BodyType) {
    return await CarRepository.getCarsByBodyType(BodyType);
}

// ✅ Fetch cars by Maximum Kilometers Driven
async function getCarsByMaxKilometerDriven(maxKilometers) {
    return await CarRepository.getCarsByMaxKilometerDriven(maxKilometers);
}

// ✅ Fetch cars by Transmission Type
async function getCarsByTransmissionType(Transmission) {
    return await CarRepository.getCarsByTransmissionType(Transmission);
}

// ✅ Fetch cars by Maximum Price
async function getCarsByMaxPrice(MaxPrice) {
    return await CarRepository.getCarsByMaxPrice(MaxPrice);
}
async function findcars(body) {
   console.log("car Service");
    const { BodyType, PriceMax, FuelType, Transmission, KMDriven } = body;

    // Building the query object
    let filter = {};

    if (BodyType) filter.BodyType = BodyType;
    if (FuelType) filter.FuelType = FuelType;
    if (Transmission) filter.Transmission = Transmission;
    if (KMDriven) filter.KiloDriven = { $lte: Number(KMDriven) }; // Fixed filter field
    if (PriceMax) filter.Price = { $lte: Number(PriceMax) };

    return await CarRepository.fetchcar(filter);
   
}
module.exports = {
    createCar,
    deleteCarById,
    getCarById,
    getCarList,
    getCarsByFuelType,
    getCarsByBodyType,
    getCarsByMaxKilometerDriven,
    getCarsByTransmissionType,
    getCarsByMaxPrice,
    findcars
};
