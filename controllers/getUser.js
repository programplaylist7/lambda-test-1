import User from "../models/user.js";

export const getUser = async (req, res) => {
    try{
        
        const allUser = await User.find();
        return res.json({
            allUser
        })

    } catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}