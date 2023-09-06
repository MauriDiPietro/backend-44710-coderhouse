import mongoose from "mongoose";

const userCollection = 'users';

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true, max: 100 },
    lastname: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max:100, unique: true },
    admin: { type: Boolean, default: false },
    age: { type: Number, required: true },
},
{ 
    timestamps: true,
    versionKey: false 
},
);

export const UserModel = mongoose.model(userCollection, UserSchema);