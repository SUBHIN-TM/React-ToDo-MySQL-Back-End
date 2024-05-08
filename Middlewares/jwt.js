

const verifyToken = (req,res,next) =>  {
    const authHeader = req.headers['authorization'];
    if(typeof authHeader !== 'undefined'){
       const tokenArray=authHeader.split(' ');
       const token = tokenArray[1]
       // console.log(token);
       jwt.verify(token,process.env.JWT_KEY,(err,decodedToken) =>{
       if(err){
           return res.status(401).json({ message: "Unauthorized"});
       }
       req.token=decodedToken
       next();
       })
    }else{
       return res.status(403).json({relogin:true})
    }
   }


   export default verifyToken;