const express = require('express');
const app = express();
const sequelize = require('./ORM')
const usuarios = require('./models/usuarios')
const funciones = require('./funciones')

app.get('/all1',(req,res)=>{
    try {
        funciones.findXid(usuarios, 2)
            .then(datos =>{
            res.json(datos)
            })
    } catch (error) {
        res.json("error")
    }
})
//estos dos end points hacen lo mismo,solo que en uno se trabaja el then y en el otro el async await
app.get('/all2', async(req,res)=>{
    const data = await funciones.findXid(usuarios, 2)
    res.json(data)
})

app.get('/new', (req, res) => {
    //agregamos un usuario a la bd
    try {
        funciones.addUser("vale","repetto")
            .then(data =>{
                res.json()
            })
    } catch (error) {
        res.json(error)
    }
    
})
// User.sync() - Esto crea la tabla si no existe (y no hace nada si ya existe)
// User.sync({ force: true }) - Esto crea la tabla, soltándola primero si ya existía
// User.sync({ alter: true }) - Esto comprueba cuál es el estado actual de la tabla en la base de datos (qué columnas tiene, cuáles son sus tipos de datos, etc.),
// y luego realiza los cambios necesarios en la tabla para que coincida con el modelo.
app.listen('3000', ()=>{
    console.log("app arriba");
    //nos conectamos a la bd
    //force true drop table
    sequelize.sync({ force: false })
        .then(()=>{
            console.log("conectado");
        }).catch((error)=>{
            console.log(error);
        })
})