const {customAPIError} = require('../errors/custome-err')

const errorHandlerMiddleware = (err,req,res,next)=>{
   if (error instanceof customAPIError){
       res.status(err.statusCode).json({msg:err.message})
   }
    res.status(500).json({msg :'something went wrong, try again later'})
}

module.exports = errorHandlerMiddleware