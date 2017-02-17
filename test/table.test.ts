import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/tables', () => {
    
    it('response with Json array', () => {
        return chai.request(app).get('/api/v1/tables')
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
        });
    });

    it('should include add_members', () => {
        return chai.request(app).get('/api/v1/tables')
        .then(res => {
            let add_members = res.body.find(table => table.name === 'add_members');
            expect(add_members).to.exist;
            // expect(add_members).to.have.all.keys([
            //     'name'
            // ]);
        });
    });
});

describe('GET api/v1/tables/:name', () => {
    
    it('response with single Json object', () => {
        return chai.request(app).get('/api/v1/tables/add_members')
        .then(res => {
            expect(res.status).to.eql(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
        });
    });

    it('should return add_members', () => {
        return chai.request(app).get('/api/v1/tables/add_members')
        .then(res => {
            expect(res.body.table.name).to.equal('add_members');
        });
    });
});