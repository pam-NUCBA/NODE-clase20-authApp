import express from 'express'
import postRegister from '../controllers/register.js'
import {validationRules, validate} from '../middlewares/validators.js'

const router = express.Router()

router.post('/', validationRules(), validate, postRegister)

export default router;