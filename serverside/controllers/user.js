import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


export const signout = async (req, res) => { }


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isUserExist = await User.findOne({ email });

        if (!isUserExist) {
            return res.status(400).json({ msg: 'user not found' });
        }
        const ispasswordCorrect = await bcrpt.compare(password, isUserExist.password);
        if (!ispasswordCorrect) {
            return res.status(400).json({ msg: 'password not match' });
        }
        // if both user exist and password correct generate token
        const token = jwt.sign({ email: isUserExist.email, id: isUserExist._id }, process.env.JWT_SECRET);
        res.status(200).json({
            result: isUserExist,
            token
        })



    } catch (error) {
        res.status(500).json({
            message: 'server error'
        })

    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {return res.status(400).json({message: 'user already exist'})}

       

        
        const hashedPassword = await bcrypt.hash(password,12);
        const user = new User({
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword
        })
        const result = await user.save();
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            result,
            token

        })


    } catch (error) {
        res.status(500).json({
            message: 'server error'
        })

    }



}
