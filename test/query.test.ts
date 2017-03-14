import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST api/v1/query', () => {
    
    it('response with Json array', () => {
        return chai.request(app).post('/api/v1/query')
        .send({command: 'select top 10 * from membership_service.dbo.add_members nolock'})
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
        });
    });
});