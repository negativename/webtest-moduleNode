
const expect = require('chai').expect;
const testTrendtech = require('./module');

describe("test-task", () => {
    it("[1,2,3,4,5,6,7,8] -> 1-8", (done) => {
       testTrendtech.convert([1,2,3,4,5,6,7,8]).then(r => {
           expect(r).to.equal('1-8');
           done();
       });
    });
    it("[1,3,4,5,6,7,8] -> 1,3-8", (done) => {
        testTrendtech.convert([1,3,4,5,6,7,8]).then(r => {
            expect(r).to.equal('1,3-8');
            done();
        });
    });
    it("[1,3,4,5,6,7,8,10,11,12] -> 1,3-8,10-12", (done) => {
        testTrendtech.convert([1,3,4,5,6,7,8,10,11,12]).then(r => {
            expect(r).to.equal('1,3-8,10-12');
            done();
        });
    });
    it("[1,2,3] -> 1-3", (done) => {
        testTrendtech.convert([1,2,3]).then(r => {
            expect(r).to.equal('1-3');
            done();
        });
    });
    it("[1,2] -> 1,2", (done) => {
        testTrendtech.convert([1,2]).then(r => {
            expect(r).to.equal('1,2');
            done();
        });
    });
    it("[1,2,4] -> 1,2,4", (done) => {
        testTrendtech.convert([1,2,4]).then(r => {
            expect(r).to.equal('1,2,4');
            done();
        });
    });
    it("[1,2,4,5,6] -> 1,2,4-6", (done) => {
        testTrendtech.convert([1,2,4,5,6]).then(r => {
            expect(r).to.equal('1,2,4-6');
            done();
        });
    });
    it("[1,2,3,7,8,9,15,17,19,20,21] -> 1-3,7-9,15,17,19-21", (done) => {
        testTrendtech.convert([1,2,3,7,8,9,15,17,19,20,21]).then(r => {
            expect(r).to.equal('1-3,7-9,15,17,19-21');
            done();
        });
    });
    it("[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> 1-6,100,1091,1999-2002", (done) => {
        testTrendtech.convert([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then(r => {
            expect(r).to.equal('1-6,100,1091,1999-2002');
            done();
        });
    });
    it("[1] -> 1", (done) => {
        testTrendtech.convert([1]).then(r => {
            expect(r).to.equal('1');
            done();
        });
    });
    it("[1,3,5,7,9,11] -> 1,3,5,7,9,11", (done) => {
        testTrendtech.convert([1,3,5,7,9,11]).then(r => {
            expect(r).to.equal('1,3,5,7,9,11');
            done();
        });
    });
});