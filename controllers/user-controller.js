const{UserModel,BookModel} = require('/workspaces/Using_MongoDB/models');
//
exports.getAllUsers = async (req,res)=>{
    const users = await UserModel.find();
    if(users.length === 0){
        return res.status(404).json({
            success:fasle,
            message:'No user found!!'
        })
    }
    return res.status(200).json({
        success:true,
        data:users
    })
}