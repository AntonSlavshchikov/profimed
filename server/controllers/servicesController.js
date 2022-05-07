const uuid = require('uuid');
const path = require('path');

const { Services } = require('../models/models');
const ApiError = require('../error/ApiError');

class ServicesController {
    async getAll(req, res) {
        let services = await Services.findAll();

        return res.json(services);
    }

    async getById(req, res) {
        let services = await Services.findByPk(req.query.service);

        return res.json(services);
    }

    async createServices(req, res, next) {
        try {
            const { type, title, price } = req.body;

            const services = await Services.create({ type, title, price });
            return res.json(services)

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateServices(req, res, next) {
        try {
            const { id, type, title, price } = req.body;

            const responce = await Services.update({ type: type, title: title, price: price }, {
                where: {
                    id: id
                }
            });

            return(res.json(responce));
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteService(req, res, next) {
        try {
            await Services.destroy({
                where: {
                    id: req.body.params.services
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ServicesController();