import { Response, Request } from 'express';
import { Contact } from '../models/Contact';

export class ContactsController {
    public getList(_: Request, res: Response) {
        return Contact.find((_, data) => res.send(data));
    }
}