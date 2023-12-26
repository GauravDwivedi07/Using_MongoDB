//Importing models/databases of books and users
const {UserModel,BookModel} = require('/workspaces/Using_MongoDB/models');
//Here we are directly using exports method to export the APIs. 
exports.getAllBooks = async (req,res)=>{
    const books = await BookModel.find();
    if(books.length === 0){
        return res.status(404).json({
            success:false,
            message:'No books found'
        })
    }
    return res.status(200).json({
        success:true,
        data:books
    })
}

