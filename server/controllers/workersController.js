const uuid = require('uuid');
const path = require('path');

const { Workers } = require('../models/models');
const ApiError = require('../error/ApiError');

class WorkersController {
    // Получить список сотрудников
    async getAll(req, res) {
        let workers = await Workers.findAll();

        return res.json(workers);
    }

    // Получить сотрудника по ID
    async getById(req, res) {
        let workers = await Workers.findByPk(req.query.worker);

        return res.json(workers);
    }

    //Создать сотрудника
    async createWorkers(req, res, next) {
        try {
            const { fio, birthday, status, experience, progress, biography } = req.body;
            const { image } = req.files;

            let fileName = uuid.v4() + '.jpg';
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const workers = await Workers.create({ fio, image: fileName, birthday, status, experience, progress, biography });
            return res.json(workers)

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить сотрудника
    async updateWorkers(req, res, next) {
        try {
            const { id, fio, birthday, status, experience, progress, biography } = req.body;
            console.log(req.body)
            if (req.files) {
                const { image } = req.files;
                let fileName = uuid.v4() + '.jpg';
                image.mv(path.resolve(__dirname, '..', 'static', fileName));
                const response = await Workers.update({ fio, image: fileName, birthday, status, experience, progress, biography }, {
                    where: {
                        id: id
                    }
                });
                return res.json(response);
            }
            else {
                const response = await Workers.update({ fio: fio, birthday: birthday, status: status, experience: experience, progress: progress, biography: biography }, {
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

    // Удалить сотрудника
    async deleteWorker(req, res, next) {
        try {
            await Workers.destroy({
                where: {
                    id: req.body.params.worker
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new WorkersController();