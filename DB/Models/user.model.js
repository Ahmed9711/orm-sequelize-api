import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


const userModel = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: true
})

export default userModel;