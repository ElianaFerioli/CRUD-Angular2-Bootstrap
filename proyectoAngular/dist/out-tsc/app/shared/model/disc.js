var Disc = (function () {
    function Disc($key, name, year, artistId, picture) {
        this.$key = $key;
        this.name = name;
        this.year = year;
        this.artistId = artistId;
        this.picture = picture;
    }
    Disc.fromJson = function (_a) {
        var $key = _a.$key, name = _a.name, year = _a.year, art = _a.art, pic = _a.pic;
        return new Disc($key, name, year, art, pic);
    };
    Disc.fromJsonArray = function (json) {
        return json.map(Disc.fromJson);
    };
    return Disc;
}());
export { Disc };
//# sourceMappingURL=../../../../../src/app/shared/model/disc.js.map