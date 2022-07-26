const { DataTypes, Model } = require('sequelize');
const sequelize = require('../ORM')

class usuarios extends Model {}
usuarios.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING
},{
    sequelize,
    modedlName: "usuarios"
})

module.exports = usuarios;