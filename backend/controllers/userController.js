import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";
import crypto from 'crypto'
import sendMail from "../utils/email.js";
import 'dotenv/config'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id)
            res.json({ success: true, token })

        }
        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Route for user register
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        } else {
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    

    try {
        const user = await userModel.find({})
        if(!user){
            res.json({sucess : false, message : 'error occured'})
        }
        
        res.json({success : true, data : user})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }



}



const forgotPassword = async (req, res) => {

    const {email} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        res.json({success : false , message : 'User does not exist'})
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000
    

    await user.save() 


    const frontendUrl = process.env.REACT_APP_FRONTEND_URL || 'http://localhost:5173'; // Fallback for local testing
    const resetUrl = `${frontendUrl}/reset-password/${resetToken}`;
    
    const message = `You are receiving this email because you or someone else have requested the reset of a password. Please click the following link to reset your password: \n\n ${resetUrl}`;

    await sendMail({
        email : user.email,
        subject : 'RESET PASSWORD URL',
        message,
    })


    res.json({success : true, message : 'reset link sent to your email successfully'})


}


const resetPassword = async (req, res) => {

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex')

    const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordExpires : { $gt : Date.now() }
    })

    if(!user){
       return res.json({success : false , message : 'invalid token or expired token'})
    }


    const newPassword = req.body.password || req.params.password;

    if (!newPassword) {
        return res.json({ success: false, message: 'Password is required' });
    }

    if (newPassword.length < 8) {
        return res.json({ success: false, message: "Please enter a strong password" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)


    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined


    await user.save()
    
    res.json({success : true, message : 'password reset successfully'})


}


export { loginUser, registerUser, adminLogin, getAllUsers, forgotPassword, resetPassword }