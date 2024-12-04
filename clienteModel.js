const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'transportadora'
});

const createCliente = (data, calback) =>{
    const query = 'INSERT INTO Cliente (nome, endereco, telefone, email) VALUES(?,?,?,?)';
    con.query*(query,[data.nome, data.endereco, data.telefone, data.email], calback)
};

const readClientes = (calback) => {
    const query = "SELECT * FROM Cliente";
    con.query(query,calback);
};

const updateCliente = (data, calback) => {
    const query = 'UPDATE Cliente SET nome = ?, endereco = ?. telefone = ?, email = ?, WHERE idCLiente = ?'
    con.query(query,[data.nome, data.endereco, data.telefone, data.email, data.idCliente], calback)
}

const deleteCliente = (idCliente, calback) => {
    const query = 'DELETE FROM Cliente WHERE idCliente = ?';
    con.query(query,[idCliente], calback);
};
 

module.exports = {createCliente, readClientes , updateCliente, deleteCliente};