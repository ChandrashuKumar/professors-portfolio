// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username:    { type: String, required: true, unique: true },
    email:       { type: String, required: true, unique: true },
    passwordHash:{ type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
