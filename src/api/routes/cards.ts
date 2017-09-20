import {Router} from 'express';
import { CardsController } from '../controllers/cards';

export function cardRoutes(router: Router) {
    var e = new CardsController();
    router
        .get('/cards', e.getList);
}
