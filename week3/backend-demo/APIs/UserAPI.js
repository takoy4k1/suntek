import express from 'express'
import UserModel from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'

export const userApp = express.Router()

// READ all users
userApp.get('/users', async (req, res) => {
    const usersList = await UserModel.find()
    res.status(200).json({ message: "all users", payload: usersList })
})

// READ user by id
userApp.get('/users/:id', async (req, res) => {
    const objId = req.params.id
    const findObj = await UserModel.findById(objId)
    res.status(200).json({ message: "user found", payload: findObj })
})

// CREATE user
userApp.post('/users', async (req, res) => {
    const newUser = req.body
    newUser.password = await hash(newUser.password, 10)
    const createdUser = await UserModel.create(newUser)
    res.status(201).json({ message: "user created", payload: createdUser })
})

// UPDATE user
userApp.put('/users/:id', async (req, res) => {
    const objId = req.params.id
    const modifiedUser = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(
        objId,
        modifiedUser,
        { new: true }
    )
    res.status(200).json({ message: "user updated", payload: updatedUser })
})

// DELETE user
userApp.delete('/users/:id', async (req, res) => {
    const objId = req.params.id
    const deletedUser = await UserModel.findByIdAndDelete(objId)
    res.status(200).json({ message: "user deleted", payload: deletedUser })
})

// LOGIN user
userApp.post('/auth', async (req, res) => {
    const { username, password } = req.body

    const user = await UserModel.findOne({ username })
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }

    const isMatch = await compare(password, user.password)
    if (!isMatch) {
        return res.status(401).json({ message: "invalid credentials" })
    }

    const signedToken = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '30m' }
    )

    res.cookie('token', signedToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    })

    res.status(200).json({ message: "login successful", token: signedToken })
})