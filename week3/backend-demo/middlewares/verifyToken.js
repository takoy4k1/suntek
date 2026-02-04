import jwt from 'jsonwebtoken'

export const verifyToken=(req,res,next)=>{
    //verify token logic
    let token=req.cookies.token
    if(!token){
        return res.status(401).json({message:"please login first"})
    }
    //verify token
    let decodedToken=jwt.verify(token,'abcd')
    console.log("decoded token:",decodedToken)
    next()
}
