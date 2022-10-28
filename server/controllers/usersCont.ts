import axios from 'axios';
import bodyParser from 'body-parser';
import UserModel from '../models/userModel';

export const getUsersInfo = async (req: any, res: any) => {
  try {
    const loginInfo = req.body;
    const isAUser = await UserModel.findOne({email: loginInfo.email}, {password: 0}).collation({locale: 'en', strength: 2});
    if (!isAUser) return res.send({user: 404});
    const verifiedUser = await UserModel.findOne({_id: isAUser._id, password: loginInfo.password}, {password: 0});
    if (!verifiedUser) return res.send({user: 403});
    return res.send({user: verifiedUser});
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
