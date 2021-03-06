const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conexao');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs').send({
            name: "APAD",
            email: "pas@gmail.com",
            whatsapp: "4700000000",
            city: "Braga",
            uf: "S.Vitor"
        });

        // console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);


    });
});