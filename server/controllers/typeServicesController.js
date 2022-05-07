const uuid = require('uuid');
const path = require('path');

const {TypeService} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeServiceController {
    async getAll (req, res){
        let typeServices = await TypeService.findAll();

        return res.json(typeServices);
    }

    async getById (req, res){
        let typeServices = await TypeService.findByPk(req.query.typeService);

        return res.json(typeServices);
    }

    async createTypeServices (req, res, next) {
        try{
            const {title} = req.body;
            
            const typeServices = await TypeService.create({title});
            return res.json(typeServices)

        } catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async updateTypeAbout (req, res, next) {
        try{
            const {id,title} = req.body;
            const responce = await TypeService.update({ title }, {
                where: {
                    id: id
                }
            });

            return(res.json(responce));

        } catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteTypeService (req, res, next) {
        try {
            const responce = await TypeService.destroy({
                where: {
                    id: req.body.params.typeService
                }
            });

            return(responce);
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TypeServiceController();