import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/connection', () => {
    
    it('response with Json array', () => {
        return chai.request(app).get('/api/v1/connection/localhost/sa/Active@111')
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body.Connected).to.equal(true);
        });
    });
});