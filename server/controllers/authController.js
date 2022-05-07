const uuid = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const { User } = require('../models/models');
const ApiError = require('../error/ApiError');

const generateJwt = (id) => {
    return jwt.sign(
        {id},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

const hash = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds);
}

class authController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ where: {username} });
            if (!user) {
                return next(ApiError.internal("Такого пользователя нет!"));
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return next(ApiError.internal("Неверный пароль!"));
            }

            const token = generateJwt(user._id);
            return res.json({ token })

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    async check(req, res, next) {
        try {
            console.log(req.user);
            const token = generateJwt(req.user.id, req.user.username)
            return res.json({token})
        } catch (e) {
            console.log(e)
        }
    }

    async createUser(req, res, next) {
        try {
            const { id, username, password } = req.body;
            const hash = await bcrypt.hash(password, 10);
            const user = await User.create({ username, password: hash });
            return res.json(user)
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new authController();