var UrlHandler = function(url) {
    this._protocol;
    this._subdomain;
    this._domain;
    this._path;
    this._query;
    this._anchor;
    this._originalURL;
    this.setURL(url);
    return this;
}
UrlHandler.prototype.reset = function() {
    this._protocol = null;
    this._subdomain = null;
    this._domain = null;
    this._path = null;
    this._query = null;
    this._anchor = null;
    this._originalURL = null;
};
UrlHandler.prototype.setURL = function(url) {
    UrlHandler.prototype.reset();

    //["https://www.globo/path/to/folder?query=param#test", "https", "www", "globo", undefined, "/path/to/folder", "query=param", "test"]
    //["https://www.globo.com/path/to/folder?query=param#test", "https", "www", "globo", "com", "/path/to/folder", "query=param", "test"]
    var expression = /(.*):\/\/([^\.]+)\.([^\.\/\?\#]+)\.?([^\/\?\#]+)?([^\?\#]*)?\??([^#]*)?\#?(.*)?/;
    var regex = new RegExp(expression);
    var regexResult = url.match(regex);
    if (regexResult) {
        //Protocol
        if (regexResult[1]) {
            this.setProtocol(regexResult[1]);
        } else {
            this.setProtocol(null);
        }

        //subdomain
        if (regexResult[2]) {
            this.setSubdomain(regexResult[2]);
        } else {
            this.setSubdomain(null);
        }

        //domain
        if (regexResult[3]) {
            this.setDomain(regexResult[3] + (regexResult[4] ? '.' + regexResult[4] : ''));
        } else {
            this.setDomain(null);
        }



        //path
        if (regexResult[5]) {
            this.setPath(regexResult[5]);
        } else {
            this.setPath(null);
        }

        //query
        if (regexResult[6]) {
            this.setQuery(regexResult[6]);
        } else {
            this.setQuery(null);
        }

        //Anchor
        if (regexResult[7]) {
            this.setAnchor(regexResult[7]);
        } else {
            this.setAnchor(null);
        }
    }


};

UrlHandler.prototype.getProtocol = function() {
    return this._protocol;
};

UrlHandler.prototype.getSubdomain = function() {
    return this._subdomain;
};

UrlHandler.prototype.getDomain = function() {
    return this._domain;
};

UrlHandler.prototype.getPath = function() {
    return this._path;
};

UrlHandler.prototype.getQuery = function() {
    return this._query;
};

UrlHandler.prototype.getAnchor = function() {
    return this._anchor;
};

UrlHandler.prototype.setProtocol = function(protocol) {
    this._protocol = protocol;
};

UrlHandler.prototype.setSubdomain = function(subdomain) {
    this._subdomain = subdomain;
};

UrlHandler.prototype.setDomain = function(domain) {
    this._domain = domain;
};

UrlHandler.prototype.setPath = function(path) {
    this._path = path;
};

UrlHandler.prototype.setQuery = function(query) {
    this._query = query;
};

UrlHandler.prototype.setAnchor = function(anchor) {
    this._anchor = anchor;
};

UrlHandler.prototype.printURL = function() {
    return this._protocol + '://' + this._subdomain + '.' + this._domain + (this._path ? this._path : '') + (this._query ? '?' + this._query : '') + (this._anchor ? '#' + this._anchor : '');
};

module.exports = UrlHandler;
