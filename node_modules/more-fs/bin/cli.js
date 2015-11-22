#!/usr/bin/env node
"use strict";
var Model = require("nature").Model,
    mfs = require("../lib/more-fs");

var argv = new Model()
    .define({ name: "stats", type: "boolean", alias: "s" })
    .define({ name: "temp", type: "boolean", alias: "t" })
    .define({ name: "files", type: Array, defaultOption: true })
    .set(process.argv);
    
if (argv.stats){
    var fileStats = new mfs.FileStats(argv.files);
    console.dir(fileStats);
} else if (argv.temp){
    console.dir(mfs.getTempFilePath());
}
