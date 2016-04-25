var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var UrlHandler = require('./../src/UrlHandler');

describe('UrlHandler', function() {
    describe('getProtocol', function() {
        it('getProtocol(http://www.domain.com) should return http', function() {
            var url = new UrlHandler('http://www.domain.com');
            expect(url.getProtocol()).to.equal('http');
        });

        it('getProtocol(https://www.domain.com) should return https', function() {
            var url = new UrlHandler('https://www.domain.com');
            expect(url.getProtocol()).to.equal('https');
        });

        it('getProtocol(https://www.domain) should return https', function() {
            var url = new UrlHandler('https://www.domain');
            expect(url.getProtocol()).to.equal('https');
        });
    })
    describe('getSubdomain', function() {
        it('getSubdomain(https://www.domain.com?query=test) should return www', function() {
            var url = new UrlHandler('https://www.domain.com?query=test');
            expect(url.getSubdomain()).to.equal('www');
        });

        it('getSubdomain(https://www.domain) should return www', function() {
            var url = new UrlHandler('https://www.domain');
            expect(url.getSubdomain()).to.equal('www');
        });
    });


    describe('getDomain', function() {
        it('getDomain(https://www.domain.com?query=test) should return domain.com', function() {
            var url = new UrlHandler('https://www.domain.com?query=test');
            expect(url.getDomain()).to.equal('domain.com');
        });

        it('getDomain(https://www.domain) should return domain', function() {
            var url = new UrlHandler('https://www.domain');
            expect(url.getDomain()).to.equal('domain');
        });
    });

    describe('getPath', function() {
        it('getPath(https://www.domain.com?query=test) should return null', function() {
            var url = new UrlHandler('https://www.domain.com?query=test');
            expect(url.getPath()).to.equal(null);
        });

        it('getPath(https://www.domain/path/to/folder) should return /path/to/folder', function() {
            var url = new UrlHandler('https://www.domain/path/to/folder');
            expect(url.getPath()).to.equal('/path/to/folder');
        });

        it('getPath(https://www.domain#test=test) should return null', function() {
            var url = new UrlHandler('https://www.domain#test=test');
            expect(url.getPath()).to.equal(null);
        });

        it('getPath(https://www.domain.com/path/to/folder?query=test#test=test) should return /path/to/folder', function() {
            var url = new UrlHandler('https://www.domain.com/path/to/folder?query=test#test=test');
            expect(url.getPath()).to.equal('/path/to/folder');
        });
    });

    describe('getAnchor', function() {
        it('getAnchor(https://www.domain.com?query=test) should return null', function() {
            var url = new UrlHandler('https://www.domain.com?query=test');
            expect(url.getAnchor()).to.equal(null);
        });

        it('getAnchor(https://www.domain/path/to/folder) should return /path/to/folder', function() {
            var url = new UrlHandler('https://www.domain/path/to/folder');
            expect(url.getAnchor()).to.equal(null);
        });

        it('getAnchor(https://www.domain#test=test) should return test=test', function() {
            var url = new UrlHandler('https://www.domain#test=test');
            expect(url.getAnchor()).to.equal('test=test');
        });

        it('getAnchor(https://www.domain.com/path/to/folder?query=test#test=test) should return /path/to/folder', function() {
            var url = new UrlHandler('https://www.domain.com/path/to/folder?query=test#test=test');
            expect(url.getAnchor()).to.equal('test=test');
        });
    });


    describe('printURL', function(){
    	it('printURL(https://www.domain.com?query=test) should return https://www.domain.com?query=test', function() {
            var url = new UrlHandler('https://www.domain.com?query=test');
            expect(url.printURL()).to.equal('https://www.domain.com?query=test');
        });

        it('printURL(https://www.domain/path/to/folder) should return https://www.domain/path/to/folder', function() {
            var url = new UrlHandler('https://www.domain/path/to/folder');
            expect(url.printURL()).to.equal('https://www.domain/path/to/folder');
        });

        it('printURL(https://www.domain#test=test) should return https://www.domain#test=test', function() {
            var url = new UrlHandler('https://www.domain#test=test');
            expect(url.printURL()).to.equal('https://www.domain#test=test');
        });

        it('set Protocol and printURL(https://www.domain.com/path/to/folder?query=test#test=test) should return http://www.domain.com/path/to/folder?query=test#test=test', function() {
            var url = new UrlHandler('https://www.domain.com/path/to/folder?query=test#test=test');
            url.setProtocol('http');
            expect(url.printURL()).to.equal('http://www.domain.com/path/to/folder?query=test#test=test');
        });
    });
})
