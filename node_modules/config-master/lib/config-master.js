"use strict";
var arrayify = require("array-back");
var o = require("object-tools");
var path = require("path");

/**
Merges together JSON data from the specified files, in the specified order. Designed for app config management.
@module
@param {...string} jsonPath - the paths of JSON files to merge. If the JSON data you want to merge is contained *within* the JSON file, pass an object specifying the `jsonPath` and `configProperty`.
@returns {Object}
@example
var loadConfig = require("config-master");
var homePath = require("home-path");

var config = loadConfig(
    path.join(homePath(), ".config.json"),
    path.join(process.cwd(), ".config.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "dmd" }
);
*/
module.exports = loadConfig;

function loadConfig(){
    var configs = arrayify(arguments).map(function(file){
        var jsonPath, configProperty;
        try {
            if (typeof file === "object"){
                jsonPath = file.jsonPath;
                configProperty = file.configProperty;
            } else {
                jsonPath = file;
            }

            /*
            if this require fails it will throw, return null and move on..
            i.e. ignore bad paths.
            */
            var data = require(jsonPath);
            if (configProperty){
                return data[configProperty];
            } else {
                return data;
            }
        } catch(err){
            err.message += " [" + JSON.stringify(file) + "]";
			if (err.code === "MODULE_NOT_FOUND") {
	            return null;
			} else {
				throw err;
			}
        }
    });
    return o.extend.apply(null, configs);
}
