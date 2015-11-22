"use strict";
var os = require("os"),
    fs = require("fs"),
    glob = require("glob"),
    path = require("path"),
    crypto = require("crypto"),
    a = require("array-tools");

/* module API */
exports.deleteFile = deleteFile;
exports.copy = copy;
exports.duplicate = duplicate;
exports.read = read;
exports.write = write;
exports.writeStream = writeStream;
exports.rmdir = rmdir;
exports.mkdir = mkdir;
exports.preserveDates = preserveDates;
exports.getSafePath = getSafePath;
exports.expandFileList = expandFileList;
exports.getTempFilePath = getTempFilePath;
exports.getTempDir = getTempDir;
exports.getSubDirPath = getSubDirPath;
exports.replaceFileExtension = replaceFileExtension;
exports.getOutputPath = getOutputPath;

/** https://github.com/isaacs/node-glob#globsyncpattern-options */
exports.expand = glob.sync;
exports.Glob = glob.Glob;

/** Copy `accessed` and `modified` times from A to B */
function preserveDates(from, to){
    var fileStats = from instanceof fs.Stats ? from : fs.statSync(from);
    fs.utimesSync(to, fileStats.atime, fileStats.mtime);
}

/** Delete a file, if it exists */
function deleteFile(file){
    if (fs.existsSync(file)){
        fs.unlinkSync(file);
    }
}

function getSafePath(path){
    if (fs.existsSync(path)){
        return exports.getSafePath(path.replace(/\.(\w+)$/, "_.$1"));
    } else {
        return path;
    }
}

function expandFileList(filePaths, include, exclude){
    var output = [];

    filePaths.forEach(function(filePath){
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()){
            var dirListing = fs.readdirSync(filePath).map(function(file){
                return path.join(filePath, file);
            });
            output = output.concat(exports.expandFileList(dirListing, include, exclude));
        } else {
            if (fileShouldBeIncluded(filePath, include, exclude)){
                output.push(filePath);
            }
        }
    });
    return output;
}

function fileShouldBeIncluded(relativePath, include, exclude){
    // defaults
    var included = true,
        excluded = false;

    // exclude expression passed
    if (exclude){
        if (!(exclude instanceof RegExp)){
            throw new Error("pass a RegExp");
        }
        excluded = exclude.test(relativePath);
    }

    // include expression passed
    if (include){
        if (!(include instanceof RegExp)){
            throw new Error("pass a RegExp");
        }
        included = include.test(relativePath);
    }
    return included && !excluded;
}

/** return a random filename in the OS tmp folder */
function getTempFilePath(file){
    file = file || "temp-file";
    file = crypto.randomBytes(4).readUInt32LE(0) + path.basename(file);
    return path.join(os.tmpDir(), file);
}

function getTempDir(dirname){
    if (!dirname) throw new Error("please supply a directory name");
    var tempDir = path.join(os.tmpdir(), dirname);
    if(!fs.existsSync(tempDir)){
        fs.mkdirSync(tempDir);
    }
    return tempDir;
}

/**
Copy the supplied file(s) to the destination directory
@param {Array} files - the files to copy
@param {string} dest - the destination directory
*/
function copy(files, dest){
    a.arrayify(files).forEach(function(file){
        var destFile = path.resolve(dest, file),
            content = fs.readFileSync(file);
        write(destFile, content);
    });
}

function duplicate(from, to){
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
}

function read(from, enc){
    try {
        return fs.readFileSync(from, { encoding: enc || "utf8" });
    } catch(e){
        return null;
    }
}

/**
Create the file and populate with supplied content. Creates directories if necessary. 
*/
function write(filename, content){
    if (typeof content === "undefined") content = "";
    mkdir(path.dirname(filename));
    fs.writeFileSync(filename, content);
}

function writeStream(filename, options){
    mkdir(path.dirname(filename));
    return fs.createWriteStream(filename, options);
}

/**
mkdir -p
*/
function mkdir(dirname){
    if (!fs.existsSync(dirname)){
        mkdir(path.dirname(dirname));
        fs.mkdirSync(dirname);
    }
}

/**
remove a directory and its contents
*/
function rmdir(dirName){
    if (!fs.existsSync(dirName)) return;
    fs.readdirSync(dirName).forEach(function(file){
        var fullPath = path.join(dirName, file);
        if (fs.statSync(fullPath).isDirectory()){
            rmdir(fullPath);
        } else {
            fs.unlinkSync(fullPath);
        }
    });
    fs.rmdirSync(dirName);
}

function getSubDirPath(file, subDirName){
    if (subDirName){
        return path.join(
            path.dirname(file),
            subDirName,
            path.basename(file)
        );
    } else {
        throw new Error("getSubDirName: must supply a sub directory path");
    }
}

function replaceFileExtension(file, ext){
    return file.replace(/\.\w+$/, "." + ext);
}

function getOutputPath(file, outputDir){
    if(outputDir && file){
        outputDir = outputDir.trim();
        // specific path specified
        if (/^\.\//.test(outputDir) || /^\//.test(outputDir) || /\.\.\//.test(outputDir)){
            return path.join(outputDir, file);

        // else return subdir path of input file
        } else {
            return exports.getSubDirPath(file, outputDir);
        }
    }
}
