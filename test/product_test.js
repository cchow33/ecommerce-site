var expect = require('chai').expect;
var should = require('chai').should;
const server = require('../app/server.js')
const chaiHttp = require('chai-http')

should = chai.should();
chai.use(chaiHttp)

// First test 
// // Suite #1: Check that endpoint returns a product:
// describe('getBrands', function () {
//   // import 'getBrands' so its acccessible for all tests
//   var getBrands = require('/brands').getBrands;
  
//   it('should return a list of brands:', function (done) {
//     chai
//     .request(server)
//     .get('/brands')
//     .end((err, res) => {
//       res.should.have.status(200);
//       res.body.should.be.an('array');
//       res.body.length.should.be.equal(10);
//       res.body.should.have.keys('id', 'name');
//       done();
//     })  
//   })
// })


//Brands
describe('Brands', () => {
  describe('Get brands', () => {
    it('Should return all brands', done => {
      chai 
        .request(server)
        .get('/api/brands')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body.length.should.be.eql(5);
          res.body[0].should.have.keys('id', 'name');
          done();
        })
      })
  })

  describe('Get brands products', () => {
    it('Should return brands sunglasses', done => { 
      chai
        .request(server)
        .get('/api/brands/1/sunglasses')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body[0].should.have.keys('id', 'categoryId', 'name', 'description', 'price', 'imageUrls');
          res.body.length.should.be.eql(3);
          done();
        })
    })

    it('Throws error if not a valid brand', done => {
      chai 
        .request(server)
        .get('/api/brands/6/sunglasses')
        .end((err, res) => {
          res.should.have.status(404);
          done()
        })    
    })
  })
})