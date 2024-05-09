import Task from "../Models/Task.js";
import Category from "../Models/Category.js";

const dashboard = async(req,res)=>{
try {
    console.log("dashboard Post page");
    console.log(req.token);
    const task=await Task.create({
        title:'Marriage',
        description:'valak marriage',
        due_date:new Date(2024, 5, 30),
        user_id:req.token.id,
        category_id:1
    })
    console.log(task);
    
} catch (error) {
    console.error(error);
}
}



const dashboardGet = async (req, res) => {
    try {
        console.log("dashboard get page");
        const categories=await Category.findAll();
        const cleanedCategories=categories.map((data)=> data.dataValues)
        // console.log(cleanedCategories);
        const tasks = await Task.findAll({ where: { user_id: req.token.id } });
        const cleanedTasks=tasks.map((data)=>data.dataValues)
        // console.log(cleanedTasks);
        res.status(200).json({ tasks: cleanedTasks,userName:req.token.userName,categories:cleanedCategories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export {dashboard,dashboardGet}