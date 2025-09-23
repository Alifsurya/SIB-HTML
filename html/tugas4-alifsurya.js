//parent class
class Kendaraan {
  constructor(merk, model, tahun, plat) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
    this.plat = plat;
  }
  getInfo() {
    return `${this.merk} ${this.model}, Tahun: ${this.tahun}, Nomor Plat: ${this.plat}`;
  }
}

//child class 1
class Car extends Kendaraan {
  constructor(merk, model, tahun, plat, kursi) {
    super(merk, model, tahun, plat);
    this.kursi = kursi;
  }
  getCarInfo() {
    return `${this.getInfo()}, Jumlah Kursi: ${this.kursi}`;
  }
}

//child class 2
class Motorcycle extends Kendaraan {
  constructor(merk, model, tahun, plat, type) {
    super(merk, model, tahun, plat);
    this.type = type;
  }
  getMotorInfo() {
    return `${this.getInfo()}, Tipe: ${this.type}`;
  }
}

//class pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
  }

  infoPelanggan() {
    return `Nama Pelanggan: ${this.nama}, No Telepon: ${this.nomorTelepon}, ` +
           `Sewa: ${this.kendaraanDisewa ? this.kendaraanDisewa.getInfo() : "Belum sewa"}`;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  catatSewa(pelanggan, kendaraan) {
    pelanggan.sewaKendaraan(kendaraan);
    this.daftarPelanggan.push(pelanggan);
  }

  tampil() {
    console.log("=== Daftar Pelanggan ===");
    for (let i = 0; i < this.daftarPelanggan.length; i++) {
      console.log(`${i + 1}. ${this.daftarPelanggan[i].infoPelanggan()}`);
    }
  }
}

// ini punya sistem transportasi
const sistem = new SistemTransportasi();

// buat kendaraan 
const myCar = new Car("Toyota", "Corolla", 2024, "B5146TPB", 4);
console.log(myCar.getCarInfo());

const myMotor = new Motorcycle("Honda", "CBR150", 2023, "B1234XYZ", "Sport");
console.log(myMotor.getMotorInfo());

// ini punya pelanggan
const pelanggan1 = new Pelanggan("Andi", "08123456789");
const pelanggan2 = new Pelanggan("Budi", "08987654321");

// catat sewa kendaraan
sistem.catatSewa(pelanggan1, myCar);
sistem.catatSewa(pelanggan2, myMotor);

// tampilan daftar pelanggan
sistem.tampil();
