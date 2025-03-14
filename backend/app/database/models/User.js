const { DataTypes, Model } = require('sequelize')
const sequelizeClient = require('../connect')
const bcrypt = require('bcrypt')

class User extends Model {}

User.init({

    firstName: {
        type: DataTypes.STRING,
        allowNull: false

    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, 10))
        }
    },
    role : {
        type: DataTypes.ENUM(["user", "admin"]),
        defaultValue: "user",
        allowNull: false  
    }

},{
    modelName: 'User',
    sequelize: sequelizeClient
})

module.exports = User
// User.sync({
//     alter: true
// })

// console.log(User === sequelizeClient.models.User)