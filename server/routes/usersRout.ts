import express from "express"
const router = express.Router();

import {getUsersInfo,getGoogleUsersInfo, checkUserFromCookie} from '../controllers/usersCont'

router
.post('/checkUserFromCookie',checkUserFromCookie)
.post('/getUsersInfo',getUsersInfo)
.post('/getGoogleUsersInfo',getGoogleUsersInfo)




export default router