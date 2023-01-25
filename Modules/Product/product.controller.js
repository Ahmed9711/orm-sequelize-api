import { Op } from "sequelize";
import productModel from "../../DB/Models/product.model.js"
import userModel from "../../DB/Models/user.model.js";

export const getProducts = async (req,res) => {
    try {
        const products = await productModel.findAll({});
        res.json({products});
    } catch (error) {
        res.json({Message: "Get Products error",Error: error});
    }
    
}

export const addProduct = async (req,res) => {
    try {
        console.log(req.body);
        const product = await productModel.create(req.body);
        res.json({Message: "Added done",product});
    } catch (error) {
        res.json({Message: "Add Product error",Error: error});
    }
    
}

export const updateProduct = async (req,res) => {
    try {
        const {id, UserId} = req.body;
        await productModel.update(req.body,{
            where:{
                id,
                UserId
            }
        });
        res.json({Message: "Update done"});
    } catch (error) {
        res.json({Message: "Update Product error",Error: error});
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const {id,UserId} = req.body;
        await productModel.destroy({
            where:{
                id,
                UserId
            }
        });
        res.json({Message: "Delete done"});
    } catch (error) {
        res.json({Message: "Delete Product error",Error: error});
    }
}

export const searchProduct = async (req,res) => {
    try {
        const products = await productModel.findAll({
            where:{
                price:{
                    [Op.gt]: 3000
                }
            }
        })
        res.json({products});
    } catch (error) {
        res.json({Message: "Search Product error",Error: error});
    }
}

export const productsWithUser = async (req,res) => {
    try {
        const result = await productModel.findAll({ include: userModel })
        res.json({result});
    } catch (error) {
        res.json({Message: "Products with User error",Error: error});
    }
}
