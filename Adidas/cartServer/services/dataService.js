const db= require('./db');


const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statuscode:200,
                    products:result
                }
            }
            else{
                return{
                status:false,
                statuscode:404,
                message:'no page'
            }}

        }
    )
}

module.exports={
 getProducts
}