const uuid = require('uuid');
const path = require('path');

const {TypeAbout} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeAboutController {
    async getAll (req, res){
        let typeAbout = await TypeAbout.findAll();

        return res.json(typeAbout);
    }

    async getById (req, res){
        let typeAbout = await TypeAbout.findByPk(req.query.typeAbout);

        return res.json(typeAbout);
    }

    async createTypeAbout (req, res, next) {
        try{
            const {title} = req.body;
            
            const typeAbout = await TypeAbout.create({title});
            return res.json(typeAbout)

        } catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async updateTypeAbout (req, res, next) {
        try{
            const {id,title} = req.body;
            const responce = await TypeAbout.update({ title }, {
                where: {
                    id: id
                }
            });

            return(res.json(responce));

        } catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteTypeAbout (req, res, next) {
        try {
            await TypeAbout.destroy({
                where: {
                    id: req.body.params.typeService
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TypeAboutController();