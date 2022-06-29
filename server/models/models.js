const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const News = sequelize.define('news',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    text : {type: DataTypes.TEXT, allowNull: false},
    date : {type: DataTypes.DATE, allowNull: false}
});

const Workers = sequelize.define('workers',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio : {type: DataTypes.TEXT, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    birthday : {type: DataTypes.DATE, allowNull: true},
    status : {type: DataTypes.TEXT, allowNull: false},
    experience : {type: DataTypes.INTEGER, allowNull: false},
    progress : {type: DataTypes.TEXT, allowNull: true},
    biography : {type: DataTypes.TEXT, allowNull: true},
});

const TypeService = sequelize.define('type_service',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT, allowNull: false},
});

const Services = sequelize.define('services',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type : {type: DataTypes.INTEGER, allowNull: false},
    title : {type: DataTypes.TEXT,   allowNull: false},
    price : {type: DataTypes.INTEGER, allowNull: false},
});

const Reviews = sequelize.define('reviews',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio : {type: DataTypes.TEXT,   allowNull: false},
    text : {type: DataTypes.TEXT, allowNull: false},
    date : {type: DataTypes.DATE, allowNull: false},
});

const Vacancy = sequelize.define('vacancy',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT,   allowNull: false},
    price : {type: DataTypes.INTEGER, allowNull: false},
    text : {type: DataTypes.TEXT, allowNull: false},
});

const Documents = sequelize.define('documents',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT, allowNull: false},
    text : {type: DataTypes.TEXT, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},
});

const TypeAbout = sequelize.define('type_about',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT, allowNull: false},
});

const About = sequelize.define('about',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type : {type: DataTypes.INTEGER, allowNull: false},
    title : {type: DataTypes.TEXT,   allowNull: false},
    text : {type: DataTypes.TEXT,   allowNull: true},
    file: {type: DataTypes.STRING, allowNull: true},
});

const Licenses = sequelize.define('licenses',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.TEXT,   allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
});

const User = sequelize.define('users',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username : {type: DataTypes.STRING, allowNull: false, unique:true},
    password : {type: DataTypes.STRING, allowNull: false},
});

const ApplicationForm = sequelize.define('applicationform', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio : {type: DataTypes.TEXT,   allowNull: false},
    numberPhone: {type: DataTypes.STRING, allowNull: false},
    mark: {type: DataTypes.BOOLEAN, allowNull: true},
    doctor : {type: DataTypes.STRING,   allowNull: true},
})

TypeService.hasMany(Services);
Services.belongsTo(TypeService);

TypeAbout.hasMany(About);
About.belongsTo(TypeAbout);

module.exports = {
    News, Workers, TypeService, Services, Reviews, Vacancy, Documents, TypeAbout, About, Licenses, User, ApplicationForm
}