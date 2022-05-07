const { Reviews } = require('../models/models');
const ApiError = require('../error/ApiError');

class ReviewsController {
    async getAll(req, res) {
        let reviews = await Reviews.findAll({
            limit: 5,
            offset: req.query.limit
        });

        return res.json(reviews);
    }

    async getById(req, res) {
        let reviews = await Reviews.findByPk(req.query.reviews);

        return res.json(reviews);
    }

    async createReview(req, res, next) {
        try {
            console.log(req.body.data);
            const { fio, text, date } = req.body.data;
            const reviews = await Reviews.create({ fio, text, date });
            return res.json(reviews)

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateReview(req, res, next) {
        try {
            const { id, fio, text } = req.body;
            const responce = await Reviews.update({ fio: fio, text: text }, {
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

    async deleteReview(req, res, next) {
        try {
            await Reviews.destroy({
                where: {
                    id: req.body.params.review
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ReviewsController();