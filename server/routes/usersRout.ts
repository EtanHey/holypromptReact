import express from "express"
const router = express.Router();

import {getUsersInfo} from '../controllers/usersCont'

router
.post('/getUsersInfo',getUsersInfo)




export default router