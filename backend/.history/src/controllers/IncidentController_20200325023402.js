const connection = require('../database/conexao');

module.exports = {
    async index(request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        //retornar o id criado ([id] é igual const res = await e depois res[0])
        return response.json({ id });
    },
    async delete(request, response) {
        const id = requesr
    }
}