export class UserView {
    constructor() {
        this.tbodyEl = document.getElementById('daftar-user');
        this.formEl = document.getElementById('form-user');
        this.inputNamaEl = document.getElementById('input-nama');
        this.inputUmurEl = document.getElementById('input-umur');
        this.inputAlamatEl = document.getElementById('input-alamat');
        this.inputEmailEl = document.getElementById('input-email');
        this.btnHapusDuaEl = document.getElementById('hapus-dua-terakhir');
    }

    index(userList, controller) {
        this.tbodyEl.innerHTML = '';

        // Gunakan map() untuk menampilkan data
        userList.map((user, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${user.nama}</td>
                <td>${user.umur}</td>
                <td>${user.alamat}</td>
                <td>${user.email}</td>
                <td><button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Hapus</button></td>
            `;
            tr.querySelector('button').addEventListener('click', () => controller.destroy(user.id));
            this.tbodyEl.appendChild(tr);
        });
    }

    bindStore(controller) {
        this.formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            const userData = {
                nama: this.inputNamaEl.value.trim(),
                umur: parseInt(this.inputUmurEl.value),
                alamat: this.inputAlamatEl.value.trim(),
                email: this.inputEmailEl.value.trim()
            };
            controller.store(userData);
            this.formEl.reset();

            // Tutup modal
            const modalEl = document.getElementById('modalForm');
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.hide();
        });
    }

    bindDestroyLastTwo(controller) {
        this.btnHapusDuaEl.addEventListener('click', () => controller.destroyLastTwo());
    }
}
