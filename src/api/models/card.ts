import { Schema, model, Document } from 'mongoose';
import { CardType } from '../../types';

interface ICard extends Document {
    title: string,
    description: string,
    type: CardType,
    location: string,
    link: string
}

var CardSchema = new Schema({
    title: String,
    description: String,
    type: Number,
    location: String,
    link: String
});

var Card = model<ICard>('Card', CardSchema);

export { Card, ICard };