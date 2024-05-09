import Category from "../Models/Category.js";
const addCategories=async (req,res)=>{
    try {
        console.log("Add category section");
        console.log(req.body);
        const newCat=await Category.create({name:req.body.name})
        console.log(newCat);
        
    } catch (error) {
        console.error(error);
    }
}

export {addCategories}