const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    before
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD",
            email: "pas@gmail.com",
            whatsapp: "4700000000",
            city: "Braga",
            uf: "S.Vitor"
        });

        console.log(response.body);

    });
});