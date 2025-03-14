const User = require('../database/models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = {

    async login(req, res) {

        const { email, password } = req.body

        try {

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user) {
                return res.status(400).json({ message: 'Information invalide'})
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password)

            if(!isPasswordValid) {
                return res.status(400).json({ message: 'Information invalide'})
            }

            const token = jwt.sign({ email, role: user.role }, "-----RSA------", {
                expiresIn: '1h'
            })

            return res.status(200).json({ token })

        } catch (err) {
            return res.status(500).json({ message: err })
        }
    },

    async register(req, res){
        const { firstName, lastName, email, password } = req.body 
        try {
            const newUser = await User.create({firstName, lastName, email, password })
            return res.status(201).json(newUser)
        } catch (err) {
            return res.status(500).json({ message: err })
        }
    }

}

module.exports = userController