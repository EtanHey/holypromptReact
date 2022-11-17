import express from "express"
const router = express.Router();

import {getUsersInfo,getGoogleUsersInfo, addFileToUser} from '../controllers/usersCont'

router
.post('/getUsersInfo',getUsersInfo)
.post('/getGoogleUsersInfo',getGoogleUsersInfo)
.post('/addFileToUser',addFileToUser)




export default router