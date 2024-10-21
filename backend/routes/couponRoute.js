import express from 'express'

import { createCoupon, validateCoupon } from '../controllers/couponController.js'


const couponRouter = express.Router()




couponRouter.post('/createCoupon', createCoupon)
couponRouter.post('/validateCoupon', validateCoupon)


export default couponRouter