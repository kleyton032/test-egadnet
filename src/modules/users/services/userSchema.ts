 
import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    name: string,
    email: string,
    password: string,
    timestamp: Date
}

export interface IUsers extends IUser, Document {}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index : {
            unique : true
        },
        required: true
    },

    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
      },
})

export default mongoose.model<IUsers>('User', userSchema);