Sylabus
One	
- Perkenalkan domain Parking Lot sebagai studi kasus.
- Buat class dasar: Car, ParkingLot.
- Bahas konsep: Encapsulation, Single Responsibility Principle.
- Koding bareng: implementasi park(car).
- Diskusi: harusnya park() mengembalikan true, ticket, atau error?
- Tambahkan method unpark(car)
- Bagaimana kita tahu mobil itu sudah diparkir?
- Pilih struktur data: array vs map (key: car id).
- Tangani edge case: mobil yang tidak ditemukan.
- Bahas pentingnya state dalam sebuah objek.

Two
- Tambahkan aktor baru: ParkingAttendant.
- Pisahkan tanggung jawab: siapa yang memutuskan lokasi parkir?
- Konsep: delegasi, komposisi objek
- Koding: Attendant memanage satu parking lot terlebih dahulu.
- Parking Attendant bisa mememanage lebih banyak lot
- Attendant bisa menanggulangi masalah parkir ganda, mobil tidak ditemukan, tiket tidak valid
Aktifkan dukungan pembaca layar


PPT
Story Satu dn Dua
1. Buat class Car dan ParkingLot
2. Class car untuk menampung informasi mobil dan mengembalikan value private
3. buat method park() di parkingLot untuk memarkirkan mobil. Mobil yang diparkir akan disimpan pakai Map / array. Akan mengembalikan ticket di method ini
    a. validasi cek full tidak parkiran
    b. validasi plat nomor apakah sudah tersimpan di Map?
4. buat method unParkk() untuk keluarin mobil
    a. validasi tiket mobil jika tidak ditemukan
5. buat method cekPark() untuk melihat mobil apa saja didalamnya

Story 3 dn 4

