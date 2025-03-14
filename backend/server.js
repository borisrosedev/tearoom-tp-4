const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./app/routes/user');
const sequelizeClient = require('./app/database/connect')
dotenv.config()

const app = express()

async function testConnection () {
    try {
        await sequelizeClient.authenticate()
        console.log('😃Connection avec la bdd réussie')

    } catch(err) {
        console.log(err)
    }
}

testConnection()


app.use(cors())
app.use(express.json({
    limit: '10mb'
}))
app.use(express.urlencoded({
    extended: true
}))


app.use('/api/v1/user', userRoutes)
app.set('port', process.env.PORT)
app.set('host', process.env.HOST)

app.listen(app.get('port'), () => {
    console.log(`🟢Server running at : http://${app.get('host')}:${app.get('port')}`)
})