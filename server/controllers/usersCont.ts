import JWT from 'jwt-simple';
import * as jwt_decoder from 'jwt-js-decode';
import UserModel from '../models/userModel';
const jwt_secret = process.env.JWT_SECRET;
export const checkUserFromCookie = async (req: any, res: any) => {
  try {
    console.log('here');
    const {UserCookie} = req.body;
    console.log(UserCookie);

    console.log(UserCookie, 'userCookies');
    // const isAUser = await UserModel.findOne({email: loginInfo.email}, {password: 0}).collation({locale: 'en', strength: 2});
    // if (!isAUser) return res.send({user: 404});
    // const verifiedUser = await UserModel.findOne({_id: isAUser._id, password: loginInfo.password}, {password: 0});
    // if (!verifiedUser) return res.send({user: 403});
    // return res.send({user: verifiedUser});
  } catch (error) {
    console.log(error);
    res.send({error: error.message});
  }
};
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
