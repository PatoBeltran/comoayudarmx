import {Router} from 'express';
import { ContactsController } from '../controllers/contacts';

export function contactRoutes(router: Router) {
    var e = new ContactsController();
    router
        .get('/contacts', e.getList);
}
