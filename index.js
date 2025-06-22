// Story1 and Story2

class Car {
    // Deklarasi field private
    #plateNumber
    #typeCar
    #merk

    constructor(plateNumber, typeCar, merk) {
        this.#plateNumber = plateNumber
        this.#typeCar = typeCar
        this.#merk = merk
    }

    getPlateNumber() {
        return this.#plateNumber
    }

    getMerkCar() {
        return this.#merk
    }

    getTypeCar() {
        return this.#typeCar
    }
}

class ParkingLot {
    constructor(id, capacity) {
        this.id = id
        this.capacity = capacity
        this.parkedCars = new Map();
    }

    isFull() {
        if (this.parkedCars.size >= this.capacity) {
            return true
        }else {
            return false
        }
    }

    park(car) {
        const plateNumberCar = car.getPlateNumber()
        const typeCar = car.getTypeCar()
        const merkCar = car.getMerkCar()

        if (this.isFull()) {
            throw new Error("Tempat parkir penuh")
        }

        // cek plat nomor
        if (this.parkedCars.has(plateNumberCar)) {
            throw new Error("mobil dengan plat ini sudah terparkir di lot ini");
        }

        // Ticket
        const ticket = {
            carId: plateNumberCar,
            typeCar: typeCar,
            merk: merkCar,
            lotId: this.id,
            timestamp: new Date()
        };

        // Save ticket data into the map using plate number as key
        this.parkedCars.set(plateNumberCar, ticket);
        return ticket;
    }

    unpark(ticket) {
        // console.log(this.parkedCars.has(ticket.carId)); // jika ada true, jika tidak ada false
        
        if (!this.parkedCars.has(ticket.carId)) {
            // console.log(this.parkedCars.entries());
            throw new Error("Mobil tidak ditemukan di tempat parkir ini");
        }

        const removedTicket = this.parkedCars.get(ticket.carId);
        // hapus mobil di array
        this.parkedCars.delete(ticket.carId);

        return removedTicket
    }

    cekPark() {
        // return this.parkedCars.entries()
        return Array.from(this.parkedCars.entries())
    }
}


// Instance tempat parkir dan buat kapasitas
const lotA = new ParkingLot("A", 3);


// Skenario 1 Honda Civic B1234XYZ
// Instance Mobil yang akan Prkir
const car1 = new Car("B1234XYZ", "sedan", "Honda Civic");
// Mobil Parkir
const hondaCivic = lotA.park(car1)
// console.log("Mobil Berhasil di parkir di lot A. Ticketnya: \n", hondaCivic );


// Skenario 2 Suzuki APV D8080YUK
// Instance Mobil yang akan Prkir
const car2 = new Car("D8080YUK", "MPV", "Suzuki APV");
const suzukiApv = lotA.park(car2)
// console.log("Mobil Berhasil di parkir di lot A. Ticketnya: \n", suzukiApv );


// Skenario 3 Negative Case
// Tidak Bisa Parkir Mobil dengan Plat yang sama
// const suzukiApv2 = lotA.park(car2)
// console.log(suzukiApv2);


// Skenario 4
// Keluar Mobil 
// const returnCarAPV = lotA.unpark(suzukiApv)
// console.log("Mobil keluar: ", returnCarAPV);


// untuk cek mobil yang terparkir
let cekParkir = lotA.cekPark()
// console.log(cekParkir);

