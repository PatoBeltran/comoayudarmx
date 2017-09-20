import { Schema, model, Document } from 'mongoose';

interface IEvent extends Document {
    title: String,
    location: String,
    date: Date
}

var EventSchema = new Schema({
    title: String,
    location: String,
    date: Date
});

var Event = model<IEvent>('Event', EventSchema);

export { Event, IEvent };