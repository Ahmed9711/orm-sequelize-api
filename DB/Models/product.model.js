import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";


const productModel = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    pDescription: {
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: true
})

userModel.hasMany(productModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
});

productModel.belongsTo(userModel);

export default productModel;