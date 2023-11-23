import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModels from '../../../src/database/models/product.model'
import app from '../../../src/app'
import mocks from '../../mocks/mocks';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Cria um novo produto', async function() {
    const request = mocks.mockCreate;
    const data = ProductModels.build(request);
    sinon.stub(ProductModels, 'create').resolves(data)
    const res = await chai.request(app).post('/products').send(mocks.mockCreate)
    expect(res.status).to.equal(201)
  })
});
