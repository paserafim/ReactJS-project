const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it('should be able to create a new ONG', async () => {
        const response = request(app).post('/ongs').send({
            name: "APAD",
            email: "pas@gmail.com",
            whatsapp: "470000000",
            city: "Braga",
            uf: "S.Vitor"
        });

        await

    });
});