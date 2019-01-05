import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        validate: {
            validator: validator.isEmail
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// User's password prehook
UserSchema.pre('save', function(next) {
    let user = this

    bcrypt.hash(user.password, 12, (error, hash) => {
        if (error) return next(error);
        user.password = hash
        next();
    })
})

export const UserModel = mongoose.model('users', UserSchema);