import express from "express";
const router = express.Router();

import {saveUserFiles} from '../controllers/fileCont'

router
.post('/saveUserFiles',saveUserFiles)




export default router