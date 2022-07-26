
function findXid (table,id){
    const data = table.findAll({where: {id: 2}})
    return data;
}

function addUser (name, lastname){
    const data = usuarios.create({name:name, lastname:lastname})
    return data;
}
module.exports = {
    findXid: findXid,
    addUser: addUser
}