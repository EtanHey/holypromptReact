import FileModel from '../models/fileModel';

export const saveUserFiles = async (req: any, res: any) => {
  try {
    const incomingFile = req.body;

    const isAFile = await FileModel.findOne({name: incomingFile.name});
    if (isAFile) res.send(`you already have a file named ${incomingFile.name}`);
    if (!incomingFile.id) {
      const newFile = await new FileModel(incomingFile).save();
      const readyFile = {name: newFile.name, ownerId: newFile.ownerId, text: newFile.text, id: newFile._id};
      res.send(readyFile);
    } else {
      const updatedFile = await FileModel.findOne({_id: incomingFile.id});
      console.log(updatedFile);
    }
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
