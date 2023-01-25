import { Op } from "sequelize";
import userModel from "../../DB/Models/user.model.js"

export const getUsers = async (req,res) => {
    try {
        const users = await userModel.findAll({});
        res.json({users});
    } catch (error) {
        res.json({Message: "Get Users error",Error: error});
    }
    
}

export const addUser = async (req,res) => {
    try {
        const user = await userModel.create(req.body);
        res.json({Message: "Added done",user});
    } catch (error) {
        res.json({Message: "Add User error",Error: error});
    }
    
}

export const updateUser = async (req,res) => {
    try {
        const {id} = req.body;
        await userModel.update(req.body,{
            where:{
                id
            }
        });
        res.json({Message: "Update done"});
    } catch (error) {
        res.json({Message: "Update User error",Error: error});
    }
}

export const deleteUser = async (req,res) => {
    try {
        const {id} = req.body;
        await userModel.destroy({
            where:{
                id
            }
        });
        res.json({Message: "Delete done"});
    } catch (error) {
        res.json({Message: "Delete User error",Error: error});
    }
}

export const searchUser = async (req,res) =>{
    try {
        const users = await userModel.findAll({
            where:{
                name:{
                    [Op.like]:'a%'
                },
                age:{
                    [Op.lt]:30
                }
            }
        })
        res.json({users});
    } catch (error) {
        res.json({Message: "Search User error",Error: error});
    }
}


export const usersList = async (req,res) => {
    try {
        const arr = Object.values(req.body);
        const users = await userModel.findAll({
            where:{
                id: arr
            }
        });
        res.json({users});
    } catch (error) {
        res.json({Message: "User List error",Error: error});
    }
}