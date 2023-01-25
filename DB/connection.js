import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('sequelizeDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const connectionDB = async () => {
    return await sequelize.sync({alter:true, force:false})
        .then(res => console.log("DB Connected"))
        .catch(err => console.log({Message: "Connection failed", Error: err}))
}