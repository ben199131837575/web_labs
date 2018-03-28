

//exceptions framework - allows for assertion testing with mocha
const chai = require('chai');
const expect = chai.expect;
// library to allow http request directly from java script
const request = require('superagent');
// a utility module that allows us to change http status codes into
// more readable messeges i.e. instead of 200 we could send status is
// good...
const status = require('http-status');

const mocha = require('mocha');
const describe = mocha.describe;

const apiRoot = 'http://127.0.0.1:3000/'; //think of it as a file location/path

describe('hello API testing', function(){


    var server; // <--- to store are actual server :D

    // called before testing
    before(function(done){
        console.log("starting server for testing");

        //point to expess package
        var expressServer = require('express');

        //create web application using express
        var app = expressServer();

        var router = require('../routes/router');


        app.use('/', router);
        // the port we want to listen on
        var port = 3000;

        app.listen(port, function(){
          console.log('Listening on port ' + port);
        });


    });

    after(function(){
        server.close;
        console.log('closing server...testing ended');
    });


    it('test if a http request to the server returns \"Sup Earth\"', function(done){

    // make and send a get request
        request.get(apiRoot)
        .end(function(err, res){
          expect(err).to.not.be.an('error');
          expect(res.statusCode).to.equal(status.OK);
          expect(res.text).to.equal('Sup Earth');
          done();
        });
    });

    it('POST request should not be allowed', function(done){

        request.post(apiRoot)
        .end(function(err, res){
          expect(err).to.be.an('error');
          expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
          done();
        });
    });
});











//
