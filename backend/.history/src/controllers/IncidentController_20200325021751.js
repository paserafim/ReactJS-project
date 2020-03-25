const connection = require('../database/conexao');

module.exports = {
    async create(request, response) {
        const { title, ong_id, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        //retornar o id criado ([id] é igual const res = await e depois res)
        return response.json({ id });
    }
}