const { Sequelize } = require('sequelize')


const sequelizeClient = new Sequelize('tearoom','boris','caroline', {
    port: 5432,
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelizeClient