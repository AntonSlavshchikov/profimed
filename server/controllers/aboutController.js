const uuid = require('uuid');
const path = require('path');

const { About } = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
    async getAll(req, res) {
        let about = await About.findAll();

        return res.json(about);
    }

    async getById(req, res) {
        let about = await About.findByPk(req.query.about);

        return res.json(about);
    }

    // Создать новость
    async createAbout(req, res, next) {
        try {
            const { type, title, text } = req.body;
            console.log(req);
            if (req.files != null) {
                const { file } = req.files;
                let fileName = uuid.v4() + '.docx';
                file.mv(path.resolve(__dirname, '..', 'static', fileName));

                const about = await About.create({ type, title, text, file: fileName });
                return res.json(about)
            }
            else {
                const about = await About.create({ type, title, text });
                return res.json(about)
            }

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить новость
    async updateAbout(req, res, next) {
        try {
            const { id, type, title, text } = req.body;
            if (req.files) {
                const { file } = req.files;
                let fileName = uuid.v4() + '.docx';
                file.mv(path.resolve(__dirname, '..', 'static', fileName));
                const responce = await About.update({ type, title, text, file: fileName }, {
                    where: {
                        id: id
                    }
                });
                return (res.json(responce));
            }
            else {
                const responce = await About.update({ type: type, title: title, text: text }, {
                    where: {
                        id: id
                    }
                });
                return (res.json(responce));
            }
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteAbout(req, res, next) {
        try {
            await About.destroy({
                where: {
                    id: req.body.params.about
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new NewsController();