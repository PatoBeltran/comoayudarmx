import { Schema, model, Document } from 'mongoose';

interface IContact extends Document {
    title: string,
    location: string,
    phone: string
}

var ContactSchema = new Schema({
    title: String,
    location: String,
    phone: String
});

var Contact = model<IContact>('Contact', ContactSchema);

export { Contact, IContact };