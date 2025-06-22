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


// Story3 dan Story4

class ParkingAttendant {
    constructor(name) {
        this.name = name
        this.parkingLots = new Map()
    }

    // Menambahkan parking lot ke dalam list yang dikelola petugas
    addParkingLot(parkingLot) {
        this.parkingLots.set(parkingLot.id, parkingLot);
    }

    // Menentukan lot yang tersedia (delegasi pengambilan keputusan)
    chooseAvailableLot() {
        let manipulateArray =  Array.from(this.parkingLots.values())
        console.log();
        
        let result = manipulateArray.find(lot => !lot.isFull())
        return result
    }

    // Mengecek apakah suatu mobil dengan plat tertentu sudah terparkir di manapun
    isCarParked(plateNumber) {
        
        let result = this.parkedCars.has(plateNumber);
        console.log(result, "==> ahaha");
        return result
    }

    // Memarkirkan mobil, pastikan mobil belum terparkir sebelumnya (menghindari double parking)
    park(car) {
        const lot = this.chooseAvailableLot();
        if (!lot) {
            throw new Error("Semua tempat parkir penuh");
        }
        
        return lot.park(car);
    }


    // Menampilkan daftar lot yang dikelola oleh petugas
    showHandledLots() {
        let result = Array.from(this.parkingLots.values());
        // console.log(result[2].id);
        return result   
    }
}





// Story 1 dan 2

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



// Story 3 dan 4
const attendantBudi = new ParkingAttendant("Pak Budi");
const lotB = new ParkingLot("B", 1);
const lotC = new ParkingLot("C", 2);

// Skenario 1
// tambah lot yang dikelola pak Budi
attendantBudi.addParkingLot(lotA)
attendantBudi.addParkingLot(lotB)
attendantBudi.addParkingLot(lotC)


// Skenario 2
// add mobil di parkiran
const toyotaKijang = new Car("T1234KS", "MPV", "Toyota Kijang")
const ticket2 = attendantBudi.park(toyotaKijang)
// console.log("Petugas memarkirkan mobil:", ticket2);
const toyotaVios = new Car("AB555K", "sedan", "Toyota Vios")
const ticket3 = attendantBudi.park(toyotaVios)
// console.log("Petugas memarkirkan mobil:", ticket3);
const wulingConfiro = new Car("B111OK", "MPV", "Wuling Confiro")
const ticket4 = attendantBudi.park(wulingConfiro)
// console.log("Petugas memarkirkan mobil:", ticket4);
const mazda2 = new Car("T805FEB", "Sedan", "Mazda2")
const ticket5 = attendantBudi.park(mazda2)
// console.log("Petugas memarkirkan mobil:", ticket5);


// Skenario 3
// Lihat lot yang dikelola Pak Budi setelah ada yang parkir
let lotsPakBudi = attendantBudi.showHandledLots()
console.log(lotsPakBudi);


// Skenario 4
// Parkiran Penuh
// const toyotaAvanza = new Car("T909FEB", "MPV", "Toyota Avanza")
// const ticket6 = attendantBudi.park(toyotaAvanza)
// console.log("Petugas memarkirkan mobil:", ticket6);