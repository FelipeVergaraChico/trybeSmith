import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/service/orderService';
import mocks from '../../mocks/mocks';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve Retornar todas as orders', async function(){
    const mockOrder = mocks.mockAllOrders.map((o) => OrderModel.build(o))
    sinon.stub(OrderModel, 'findAll').resolves(mockOrder)
    sinon.stub(orderService, 'getProductsIDByOrder').resolves([1,2])
    const res = await chai.request(app).get('/orders');
    expect(res.status).to.equal(200);
  })
});
