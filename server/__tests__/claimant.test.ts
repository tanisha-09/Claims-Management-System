const supertest = require('supertest');
// const app = require('../app'); 
const express = require ('express');
// const route = require('../routes/claimant.js');


describe("claimant", () => {
    describe("get claimant route", () => {
        describe("given the claimant does not exist", () => {
            it("should return a 404", async () => {
                const app = express();
                const router = express.Router();

                app.use('/api/v1', router);

                const claimantId = '123';

                await supertest(app).get(`/api/v1/getById/claim/${claimantId}`).expect(404);
            }); 
        });
    });
});
