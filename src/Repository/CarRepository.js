const Car = require("../Schema/CarSchema");

// Create a new car
async function createCar(CarDetail) {
    console.log("CARREPO");
    console.log(CarDetail);
    try {
        const response = await Car.create(CarDetail);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error creating car:", error); // Log the actual error
        throw { reason: error.message || "Cannot create car", statusCode: 401 };
    }
}

// Delete a car by its ID
async function deleteCarById(CarId) {
    try {
        const response = await Car.findByIdAndDelete(CarId);
        if (!response) throw { reason: "Car not found", statusCode: 404 };
        return response;
    } catch (error) {
        throw { reason: "Cannot delete car", statusCode: 401 };
    }
}

// Fetch a single car by ID
async function getCarById(CarId) {
    try {
        const response = await Car.findById(CarId);
        if (!response) throw { reason: "Car not found", statusCode: 404 };
        return response;
    } catch (error) {
        throw { reason: "Cannot fetch car by ID", statusCode: 401 };
    }
}

// Fetch cars based on user search input (Name, BrandName, or RegistrationCity)
async function getCarList(searchQuery) {
    try {
        const filter = {
            $or: [
                { Name: new RegExp(searchQuery, "i") }, // Case-insensitive search
                { BrandName: new RegExp(searchQuery, "i") },
                { RegistrationCity: new RegExp(searchQuery, "i") }
            ]
        };

        const cars = await Car.find(filter);
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch car list", statusCode: 401 };
    }
}

// Fetch cars based on FuelType
async function getCarsByFuelType(FuelType) {
    try {
        const cars = await Car.find({ FuelType });
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch cars by FuelType", statusCode: 401 };
    }
}

// Fetch cars based on BodyType
async function getCarsByBodyType(BodyType) {
    try {
        const cars = await Car.find({ BodyType });
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch cars by BodyType", statusCode: 401 };
    }
}

// Fetch cars based on MaxKilometerDriven
async function getCarsByMaxKilometerDriven(maxKilometers) {
    try {
        const cars = await Car.find({ KiloDriven: { $lte: maxKilometers } });
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch cars by max kilometers", statusCode: 401 };
    }
}

// Fetch cars based on TransmissionType
async function getCarsByTransmissionType(Transmission) {
    try {
        const cars = await Car.find({ Transmission });
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch cars by TransmissionType", statusCode: 401 };
    }
}

// Fetch cars based on MaxPrice
async function getCarsByMaxPrice(MaxPrice) {
    try {
        const cars = await Car.find({ Price: { $lte: MaxPrice } });
        return cars;
    } catch (error) {
        throw { reason: "Cannot fetch cars by MaxPrice", statusCode: 401 };
    }
}
async function fetchcar(filter) {
    try {
        console.log("car Repo")
        return await Car.find(filter);
    } catch (error) {
        throw { reason: error.message, statusCode: 500 };
    }
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
    fetchcar
};
