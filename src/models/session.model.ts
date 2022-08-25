import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';
import { UserDocument } from './user.model';

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword (candidatePass: string): Promise<boolean>
}

const sessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        vlaid: { type: Boolean, default: true },
        userAgent: { type: String}
    },
    {
        timestamps: true
    }
)

const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;
