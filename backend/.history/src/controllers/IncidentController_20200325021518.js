const connection = require('../database/conexao');

module.exports = {
    async create(request, response) {
        const { title, ong_id, description, value } = request.body;
        const ong_id = request.headers.authorization;

        await connection
    }
}