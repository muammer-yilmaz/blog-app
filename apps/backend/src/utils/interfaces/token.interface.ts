import { ObjectId } from 'mongoose';

interface Token extends Object {
    id: ObjectId;
    expiresIn: number;
}

export default Token;
