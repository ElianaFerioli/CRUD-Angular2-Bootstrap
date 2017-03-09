var Artist = (function () {
    function Artist($key, company, name, picture, discography) {
        this.$key = $key;
        this.company = company;
        this.name = name;
        this.picture = picture;
        this.discography = discography;
    }
    Artist.fromJson = function (_a) {
        var $key = _a.$key, company = _a.company, name = _a.name, picture = _a.picture, discography = _a.discography;
        return new Artist($key, company, name, picture, discography);
    };
    Artist.fromJsonArray = function (json) {
        return json.map(Artist.fromJson);
    };
    return Artist;
}());
export { Artist };
//# sourceMappingURL=../../../../../src/app/shared/model/artist.js.map