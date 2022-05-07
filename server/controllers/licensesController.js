const uuid = require('uuid');
const path = require('path');

const { Licenses } = require('../models/models');
const ApiError = require('../error/ApiError');

class LicensesController {
    // Получить список новостей
    async getAll(req, res) {
        console.log(req.query);
        let licenses = await Licenses.findAll();
        return res.json(licenses);
    }

    async getById(req, res) {
        let licenses = await Licenses.findByPk(req.query.licenses);

        return res.json(licenses);
    }

    // Создать новость
    async createLicenses(req, res, next) {
        try {
            const { title } = req.body;
            const { image } = req.files;
            let fileName = uuid.v4() + '.jpg';
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const licenses = await Licenses.create({ title, image: fileName });
            return res.json(licenses)

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить новость
    async uodateLicenses(req, res, next) {
        try {
            const { id } = req.body;
            const { title } = req.body;
            if (req.files) {
                const { image } = req.files;
                let fileName = uuid.v4() + '.jpg';
                image.mv(path.resolve(__dirname, '..', 'static', fileName));
                const responce = await Licenses.update({ title, image: fileName }, {
                    where: {
                        id: id
                    }
                });
                return(res.json(responce));
            }
            else{
                const responce = await Licenses.update({ title }, {
                    where: {
                        id: id
                    }
                });
                return(res.json(responce));
            }

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Удалить новость
    async deleteLicenses(req, res, next) {
        try {
            await Licenses.destroy({
                where: {
                    id: req.body.params.licenses
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new LicensesController();