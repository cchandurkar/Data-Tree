var test = require("tape");
var config = require("../lib/config-master.js");
var path = require("path");

var path = {
    one: path.resolve("test", "config1.json"),
    two: path.resolve("test", "config2.json"),
    three: { jsonPath: path.resolve("test", "package.json"), configProperty: "config" },
    four: { jsonPath: path.resolve("test", "package2.json"), configProperty: "config" }
};

test("merges correctly", function(t){
    var c = config(path.one, path.two, path.three);
    t.deepEqual(c, {
        one: "einen",
        two: "zwei",
        three: 3,
        four: "package"
    });
    t.end();
});

test("missing package.json property", function(t){
    var c = config(path.one, path.two, path.four);
    t.deepEqual(c, {
        "one": 1,
        "two": "zwei",
        "three": 3
    });
    t.end();
});
