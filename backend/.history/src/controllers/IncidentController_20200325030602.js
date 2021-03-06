const connection = require('../database/conexao');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ong')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);

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
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'operation not permitted' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();

    }
}