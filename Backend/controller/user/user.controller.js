const connection = require('../../model/connection')

const user_get = async(req,res)=>{

    try{
    const querry = "SELECT * FROM user"
    await connection.query(querry,(err,result)=>{
        if(err){
            return res.send(err.sqlMessage)
        }else{
            res.send(result)
        }
        res.end()
    })
    }catch(err){
        res.send(err.sqlMessage)
    }
}

const user_post = async(req,res)=>{
    try{

    const querry = "INSERT INTO user SET ?"
    const data = req.body
    console.log(data)
    await connection.query(querry,data,(err,result)=>{
        if(err){
            return res.send(err.sqlMessage)
        }else{
            res.send(result)
        }
        res.end()
    })
    }catch(err){
        res.send(err.sqlMessage)
    }
}

module.exports = {user_get,user_post}