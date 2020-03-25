const connection = require('../database/conexao');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').whre
    }
}