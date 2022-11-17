import * as jwt_decoder from 'jwt-js-decode';
import UserModel from '../models/userModel';

export const getUsersInfo = async (req: any, res: any) => {
  try {
    const loginInfo = req.body;
    const isAUser = await UserModel.findOne({email: loginInfo.email}, {password: 0}).collation({locale: 'en', strength: 2});
    if (!isAUser) return res.send({user: 404});
    const verifiedUser = await UserModel.findOne({_id: isAUser._id, password: loginInfo.password}, {password: 0});
    if (!verifiedUser) return res.send({user: 403});
    // const encodedUser = JWT.encode(verifiedUser, jwt_secret);
    return res.send({user: verifiedUser});
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
export const getGoogleUsersInfo = async (req: any, res: any) => {
  try {
    const {loginJWT} = req.body;
    const googleJwtPayload = new jwt_decoder.JwtDecode(loginJWT);
    const verifiedUser = googleJwtPayload.payload;
    const user = await UserModel.findOne({email: verifiedUser.email}, {password: 0}).collation({locale: 'en', strength: 2});
    if (!user) return res.send({user: 404});
    // const encodedUser = JWT.encode(user, jwt_secret);
    return res.send({user: user});
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
export const addFileToUser = async (req: any, res: any) => {
  try {
    const incomingFile = req.body;
    console.log(incomingFile);

    const updatedFilesArray = await UserModel.findOneAndUpdate({_id: incomingFile.ownerId}, {$push: {files: incomingFile}});
    console.log(updatedFilesArray, 'updatedFilesArray');

    res.send(true);
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
