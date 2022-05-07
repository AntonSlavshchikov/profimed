const uuid = require('uuid');
const path = require('path');

const {Vacancy} = require('../models/models');
const ApiError = require('../error/ApiError');

class VacancyController {
    // Получить список вакансий
    async getAll (req, res){
        let vacancy = await Vacancy.findAll();

        return res.json(vacancy);
    }

    // Получить вакансию по ID
    async getById (req, res){
        let vacancy = await Vacancy.findByPk(req.query.vacancy);

        return res.json(vacancy);
    }

    // Добавить вакансию
    async createVacancy (req, res, next) {
        try{
            const {title,price,text} = req.body;
            const vacancy = await Vacancy.create({title,price,text});
            return res.json(vacancy)

        } catch (e){
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

      // Изменить новость
      async updateVacancy(req, res, next) {
        try {
            const {id,title,price,text} = req.body;
            const responce = await Vacancy.update({ title, price, text }, {
                where: {
                    id: id
                }
            });
            return(res.json(responce))
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Удалить вакансию
    async deleteVacancy (req, res, next) {
        try {
            await Vacancy.destroy({
                where: {
                    id: req.body.params.vacancy
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new VacancyController();