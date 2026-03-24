import User from "../models/user.js";

export const deleteUser = async (req, res) => {
    try{

        const {id} = req.params;
        await User.findByIdAndDelete(id);

        return res.json({
            message: "user deleted SuccessFully"
        })
        
    } catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}