import { Response, Request } from 'express';
import { Card } from '../models/Card';

export class CardsController {
    public getList(_: Request, res: Response) {
        return Card.find((_, data) => res.send(data));
    }
}