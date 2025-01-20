const config = require('./dbconfig.js')
const sql = require('mssql')

async function getCustomers() {
    try {
        let pool = await sql.connect(config)
        let elenco = await pool.request().query("SELECT * FROM Clienti")

        return elenco.recordsets
    }
    catch (error) {
        console.log(elenco)
    }
}
async function getCustomer(id) {
    try {
        let pool = await sql.connect(config)
        let cliente = await pool.request()
            .input('id_cliente', sql.Int, id)
            .query("SELECT * FROM Clienti WHERE Id=@id_cliente")

        return cliente.recordsets
    }
    catch (error) {
        console.log(elenco)
    }
}

module.exports = {
    getCustomers: getCustomers,
    getCustomer: getCustomer
}