import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Erro caso não tenha password', async function(){
    const res = await chai.request(app).post('/login').send({username: 'felipão'})
    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ message: '"username" and "password" are required' })
  })
  it('Erro caso não tenha username', async function() {
    const res = await chai.request(app).post('/login').send({password: '159357'})
    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ message: '"username" and "password" are required' })
  })
  it('Erro com o usuario invalido', async function(){
    sinon.stub(UserModel, 'findOne').resolves(null)
    const res = await chai.request(app).post('/login').send({username: 'felipão', password: 'brbrbr'})
    expect(res.status).to.be.equal(401)
    expect(res.body).to.be.deep.equal({ message: 'Username or password invalid' })
  })
});
