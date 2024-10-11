import express from 'express';
import { loginUser,registerUser,adminLogin, getAllUsers, forgotPassword, resetPassword } from '../controllers/userController.js';
import adminAuth from '../middleware/adminAuth.js'

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/users', adminAuth,  getAllUsers)
userRouter.post('/forgot-password', forgotPassword)
userRouter.post('/reset-password/:resetToken', resetPassword  )


export default userRouter;