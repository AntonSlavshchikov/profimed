const uuid = require('uuid');
const path = require('path');

const { ApplicationForm } = require('../models/models');
const ApiError = require('../error/ApiError');

class ApplicationFormController {
    async getAll(req, res) {
        let appForm = await ApplicationForm.findAll();
        return res.json(appForm);
    }

    async getById(req, res) {
        let appForm = await ApplicationForm.findByPk(req.query.appForm);

        return res.json(appForm);
    }

    // Создать новость
    async createApplicationForm(req, res, next) {
        try {
            const { fio, numberPhone, mark } = req.body;
            const appForm = await ApplicationForm.create({ fio, numberPhone, mark });
            return res.json(appForm)
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить новость
    async updateApplicationForm(req, res, next) {
        try {
            const { id, mark } = req.body;
            const responce = await ApplicationForm.update({ mark: mark }, {
                where: {
                    id: id
                }
            });
            return (res.json(responce));
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteApplicationForm(req, res, next) {
        try {
            await ApplicationForm.destroy({
                where: {
                    id: req.body.params.appForm
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ApplicationFormController();