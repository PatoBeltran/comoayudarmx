import {Router} from 'express';
import { EventController } from '../controllers/events';

export function eventRoutes(router: Router) {
    var e = new EventController();
    router
        .get('/events', e.getList)
		.post('/events', e.add)
		.delete('/events/:id', e.remove)
	    .patch('/events/:id', e.update);
}
