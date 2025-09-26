import { UserController } from './modules/controller.js';
import { UserView } from './modules/view.js';

document.addEventListener('DOMContentLoaded', () => {
    const view = new UserView();
    new UserController(view);
});
