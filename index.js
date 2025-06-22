// Story1 and Story2

class Car {
    constructor(plateNumber, typeCar, merk) {
        this.plateNumber = plateNumber
        this.typeCar = typeCar
        this.merk = merk
    }
}

class ParkingLot {
    constructor(id, capacity) {
        this.id = id
        this.capacity = capacity
        this.parkedCars = new Map();
    }

    park(car) {
        if (this.parkedCars.has(car.plateNumber)) {
            throw new Error("Car with this plate number is already parked");
        }

        // Ticket
        const ticket = {
            carId: car.plateNumber,
            typeCar: car.typeCar,
            merk: car.merk,
            lotId: this.id,
            timestamp: new Date()
        };

        // Save ticket data into the map using plate number as key
        this.parkedCars.set(car.plateNumber, ticket);
        return ticket;
    }

    unpark(ticket) {
        if (!this.parkedCars.has(ticket.carId)) {
            throw new Error("Car not found in this parking lot");
        }

        const removedTicket = this.parkedCars.get(ticket.carId);
        // hapus mobil di array
        this.parkedCars.delete(ticket.carId);

        return removedTicket
    }
}


// Instance tempat parkir dan buat kapasitas
const lotA = new ParkingLot("A", 2);

// Skenario 1 Honda Civic B1234XYZ
// Instance Mobil yang akan Prkir
const car1 = new Car("B1234XYZ", "sedan", "Honda Civic");
const hondaCivic = lotA.park(car1)
console.log(hondaCivic, "==> INI HONDA CIVIC");

// Skenario 2 Suzuki APV D8080YUK
// Instance Mobil yang akan Prkir
const car2 = new Car("D8080YUK", "MPV", "Suzuki APV");
const suzukiApv = lotA.park(car2)
console.log(suzukiApv, "==> INI SUZUKI APV");

// Skenario 3 Negative Case
// Tidak Bisa Parkir Mobil dengan Plat yang sama
// const suzukiApv2 = lotA.park(car2)
// console.log(suzukiApv2);

// Skenario 4
// Keluar Mobil 
const returnCarAPV = lotA.unpark(suzukiApv)
console.log(returnCarAPV, "==> INI yang keluar");
