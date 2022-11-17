import mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
  name: String,
  text: [String],
  ownerId: String
});

const FileModel = mongoose.model('files', FileSchema);
export default FileModel;
