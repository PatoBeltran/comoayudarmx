import { Response, Request } from 'express';
import { Event, IEvent } from '../models/Event';

export class EventController {
    public getList(_: Request, res: Response) {
        return Event.find((_, data) => res.send(data));
    }

    public add(req: Request, res: Response) {
        let event = new Event(req.body);

        event.save((_, data: IEvent) =>
            res.status(200).send(data._id));
    }

    public update(req: Request, res: Response) {
        Event.findOne({ _id: req.body._id }, (_, doc) => {
            if (doc) {
                for (let key in req.body) {
                    doc[key] = req.body[key];
                }

                doc.save();

                res.status(200).send(null);
            }
        });
    }

    public remove(req: Request, res: Response) {
        Event.findOne({ _id: req.params.id })
            .remove(_ => {
                res.status(202).send(null);
            });
    }
}