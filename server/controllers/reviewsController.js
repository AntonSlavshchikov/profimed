const { Reviews } = require('../models/models');
const ApiError = require('../error/ApiError');

class ReviewsController {
    async getAll(req, res) {
        let reviews = await Reviews.findAll({
            limit: 5,
            offset: req.query.limit,
            order: [
                ['id','DESC'],
            ]
        });

        return res.json(reviews);
    }

    async getById(req, res) {
        let reviews = await Reviews.findByPk(req.query.reviews);

        return res.json(reviews);
    }

    async getCountReviews(req, res){
        let count = await Reviews.count();
        return res.json(count);
    }

    async createReview(req, res, next) {
        try {
            const { fio, text, date } = req.body;
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