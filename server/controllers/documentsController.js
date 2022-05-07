const uuid = require('uuid');
const path = require('path');

const { Documents } = require('../models/models');
const ApiError = require('../error/ApiError');

class DocumentsController {
    // Получить список документов
    async getAll(req, res) {
        console.log(req.query);
        let documents = await Documents.findAll();
        return res.json(documents);
    }

    async getById(req, res) {
        let documents = await Documents.findByPk(req.query.document);
        return res.json(documents);
    }

    // Создать документ
    async createDocument(req, res, next) {
        try {
            const { title, text} = req.body;
            const { file } = req.files;
            console.log(file);
            let fileName = uuid.v4() + '.docx';
            file.mv(path.resolve(__dirname, '..', 'static', fileName));

            const document = await Documents.create({ title, text,file: fileName });
            return res.json(document)

        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменить документ
    async updateDocument(req, res, next) {
        try {
            const { id, title, text } = req.body;
            if (req.files) {
                const { file } = req.files;
                let fileName = uuid.v4() + '.docx';
                file.mv(path.resolve(__dirname, '..', 'static', fileName));
                const responce = await Documents.update({ title, text ,file: fileName }, {
                    where: {
                        id: id
                    }
                });
                return(res.json(responce));
            }
            else {
                const responce = await Documents.update({ title: title, text: text }, {
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

    // Удалить документ
    async deleteDocument(req, res, next) {
        try {
            await Documents.destroy({
                where: {
                    id: req.body.params.document
                }
            });
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new DocumentsController();