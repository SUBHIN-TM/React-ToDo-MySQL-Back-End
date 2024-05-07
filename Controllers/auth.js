const login=async (req,res)=>{
    try {
        console.log("Login Post section");
        
    } catch (error) {
        console.error("error from login post section",error);
    }

}


const signUp =async(req,res)=>{
    try {
        console.log("signUp Post section");
    } catch (error) {
        console.error("error from signUp post section",error);
    }
}

export {login,signUp}