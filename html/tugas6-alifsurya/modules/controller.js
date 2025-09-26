import { UserModel } from './model.js';

export class UserController {
    constructor(view) {
        this.model = new UserModel();
        this.view = view;

        // Tampilkan data awal
        this.view.index(this.model.index(), this);

        // Bind event
        this.view.bindStore(this);
        this.view.bindDestroyLastTwo(this);
    }

    store(userData) {
        this.model.store(userData);
        this.view.index(this.model.index(), this);
    }

    destroy(id) {
        this.model.destroy(id);
        this.view.index(this.model.index(), this);
    }

    destroyLastTwo() {
        this.model.destroyLastTwo();
        this.view.index(this.model.index(), this);
    }
}
