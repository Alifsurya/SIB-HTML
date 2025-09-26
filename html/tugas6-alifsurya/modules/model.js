export class UserModel {
    constructor() {
        this.users = [
            { id: 1, nama: "Alif Surya", umur: 20, alamat: "Jl Pengangeran 3 Cakung", email: "alif@gmail.com" },
            { id: 2, nama: "Budi Santoso", umur: 25, alamat: "Jl Melati Raya No.12 Depok", email: "budi@gmail.com" },
            { id: 3, nama: "Citra Lestari", umur: 22, alamat: "Jl Kenanga 5 Bekasi", email: "citra@gmail.com" },
            { id: 4, nama: "Dimas Aji", umur: 28, alamat: "Jl Cempaka Putih Jakarta Pusat", email: "dimas@gmail.com" },
            { id: 5, nama: "Eka Putri", umur: 21, alamat: "Jl Anggrek 2 Tangerang", email: "eka@gmail.com" },
            { id: 6, nama: "Fajar Nugroho", umur: 27, alamat: "Jl Mawar 7 Bandung", email: "fajar@gmail.com" },
            { id: 7, nama: "Gita Andini", umur: 23, alamat: "Jl Dahlia 1 Bogor", email: "gita@gmail.com" },
            { id: 8, nama: "Hendra Saputra", umur: 26, alamat: "Jl Flamboyan 10 Depok", email: "hendra@gmail.com" },
            { id: 9, nama: "Indah Permata", umur: 24, alamat: "Jl Cemara 8 Jakarta Selatan", email: "indah@gmail.com" },
            { id: 10, nama: "Joko Prasetyo", umur: 29, alamat: "Jl Teratai 6 Surabaya", email: "joko@gmail.com" }
        ];
    }

    store(userData) {
        const idBaru = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
        this.users.push({ id: idBaru, ...userData });
    }

    destroy(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    destroyLastTwo() {
        this.users.splice(-2, 2);
    }

    index() {
        return this.users;
    }
}
