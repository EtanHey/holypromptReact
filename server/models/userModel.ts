import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {first: String, last: String},
  email: String,
  password: String,
  files: []
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;
