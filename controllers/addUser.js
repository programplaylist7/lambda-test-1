import User from "../models/user.js";

export const addUser = async (req, res) => {
    try{

        const {name, age} = req.body;
        if(!name || !age)
            return res.status(400).json({
                message: "required data not found"
            });
        
        const newUser = await User.create({
            name, age
        });

        return res.json({
            newUser
        })
        
    } catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}