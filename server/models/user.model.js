const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [5, "Name must be at least 5 characters"],
        maxLength: [50, "Name must be less than 50 characters"],
        trim: true 
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student',
        validate: {
            validator: function (value) {
                return ['student', 'admin'].includes(value);
            },
            message: 'Invalid role'
        }
    },
    avatar: {
        public_id: String,
        public_url: String
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: Date 
    }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;
