const uuid = require('uuid');
const path = require('path');

const { News } = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
    // Получить список новостей
    async getAll(req, res) {
        console.log(req.query);
        let news = await News.findAll({
            limit: 5,
            offset: req.query.limit,
            order: [
                ['id', 'DESC'],
            ]
        });
        return res.json(news);
    }

    async getById(req, res) {
        let news = await News.findByPk(req.query.news);

        return res.json(news);
    }

    // Создать новость
    async createNews(req, res, next) {
        try {
            const { title, text, date } = req.body;
            const { image } = req.files;
            console.log(req.files)
            let fileName = uuid.v4() + '.jpg';
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const news = await News.create({ title, image: fileName, text, date });
            return res.json(news)

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить новость
    async uodateNews(req, res, next) {
        try {
            const { id, title, text } = req.body;
            if (req.files) {
                const { image } = req.files;
                let fileName = uuid.v4() + '.jpg';
                image.mv(path.resolve(__dirname, '..', 'static', fileName));
                const response = await News.update({ title, image: fileName, text }, {
                    where: {
                        id: id
                    }
                });
                return res.json(response);
            }
            else {
                const response = await News.update({ title: title, text: text }, {
                    where: {
                        id: id
                    }
                });
                return res.json(response);
            }
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Удалить новость
    async deleteNews(req, res, next) {
        try {
            await News.destroy({
                where: {
                    id: req.body.params.news
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new NewsController();