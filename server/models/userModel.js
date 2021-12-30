const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  stockList: [{type: String}]
})

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;