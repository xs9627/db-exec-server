import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST api/v1/query', () => {
    
    it('response with Json array', () => {
        return chai.request(app).post('/api/v1/query')
        .send({command: 'select 1'})
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
        });
    });
});

describe('POST api/v1/query/:connectionId', () => {
    it('response with Json array with connectionId', () => {
        chai.request(app).get('/api/v1/connection/localhost/sa/Active@111')
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body.Connected).to.equal(true);

            return chai.request(app).post('/api/v1/query/' + res.body.Id)
            .send({command: 'select 1'})
            .then(res => {
                expect(res.status).to.eql(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
            });
        });
    });
});

