"use strict";
var util = require("util");

var l = console.log,
    err = console.error,
    format = util.format,
    otherFlags = [],
    out = console.writeStream || process.stdout,
    inBrowser = typeof window !== "undefined";

exports.log = log;
exports.error = error;
exports.write = write;
exports.hideCursor = hideCursor;
exports.showCursor = showCursor;
exports.column = column;
exports.test = test;
exports.clearToScreenEnd = clearToScreenEnd;
exports.clearToScreenBegin = clearToScreenBegin;
exports.clearScreen = clearScreen;
exports.cursorPosition = cursorPosition;
exports.cursorLinesDown = cursorLinesDown;
exports.cursorLinesUp = cursorLinesUp;
exports.cursorSave = cursorSave;
exports.cursorRestore = cursorRestore;
exports.cursorUp = cursorUp;
exports.cursorDown = cursorDown;

/* Control Sequence Initiator */
var csi = "\x1b[";

/*
Select Graphic Rendition
http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
*/
var sgr = {
    codes: {
        reset: 0,
        bold: 1,
        italic: 3,
        underline: 4,
        negative: 7,
        black: 30,
        red: 31,
        green: 32,
        yellow: 33,
        blue: 34,
        magenta: 35,
        cyan: 36,
        white: 37
    },
    seq: function(code){
        return format("%s%sm", csi, this.codes[code]);
    },
    activeFlags: [],
    activeSeq: function(){
        if (this.activeFlags.length){
            var codes = this.activeFlags.map(function(format){
                return sgr.codes[format];
            });
            return format("%s%sm", csi, codes.join(";"));
        } else {
            return "";
        }
    },
    css: function(){
        var css = "";
        var styles = this.activeFlags.map(function(flag){
            switch(flag){
            case "bold": 
                return "font-weight: bold";
            case "italic": 
                return "font-style: italic";
            case "underline": 
                return "text-decoration: underline";
            }
        });
        return styles.join(";");
    }
};

var EL = {
    codes: {
        clearLineToEnd: 0,
        clearLineToBeginnng: 1,
        clearLine: 2
    },
    seq: function(code){
        return format("%s%sK", csi, this.codes[code]);
    },
    activeFlags: [],
    activeSeq: function(){
        if (this.activeFlags.length){
            var codes = this.activeFlags.map(function(format){
                return sgr.codes[format];
            });
            return format("%s%sK", csi, codes.join(";"));
        } else {
            return "";
        }
    }
}

var otherCodes = {
    hide: "?25l",
    show: "?25h"
};

/* Higher-order util.format to replace `%blue{blah}` style tokens */
function utilFormat(){
    var output = format.apply(null, arguments);
    Object.keys(sgr.codes).forEach(function(code){
        var token = new RegExp("%" + code + "{(.*?)}", "g");
        if (token.test(output)){
            output = output.replace(
                token,
                format("%s%s%s%s", sgr.seq(code), "$1", sgr.seq("reset"), sgr.activeSeq())
            );
        }
    });
    Object.keys(EL.codes).forEach(function(code){
        var token = new RegExp("%" + code + "{(.*?)}", "g");
        if (token.test(output)){
            output = output.replace(
                token,
                format("%s%s%s%s", EL.seq(code), "$1", EL.seq("reset"), EL.activeSeq())
            );
        }
    });
    return output;
}

util.format = utilFormat;

/* Define SGR properties, `dope.red` etc. */
function addSgrProperty(flag){
    Object.defineProperty(exports, flag, {
        enumerable: true,
        get: function(){
            sgr.activeFlags.push(flag);
            return exports;
        }
    });
}
Object.keys(sgr.codes).forEach(addSgrProperty);

/* Define EL properties, `dope.clearLine` etc. */
function addELProperty(flag){
    Object.defineProperty(exports, flag, {
        enumerable: true,
        get: function(){
            EL.activeFlags.push(flag);
            return exports;
        }
    });
}
Object.keys(EL.codes).forEach(addELProperty);

function log(){
    if (inBrowser){
        arguments[0] = "%c" + arguments[0];
        arguments[6] = arguments[5];
        arguments[5] = arguments[4];
        arguments[4] = arguments[3];
        arguments[3] = arguments[2];
        arguments[2] = arguments[1];
        arguments[1] = sgr.css();
        arguments.length++;
        l.apply(console, arguments);
    } else {
        out.write(sgr.activeSeq());
        out.write(EL.activeSeq());
        l.apply(console, arguments);
        out.write(sgr.seq("reset"));
    }
    sgr.activeFlags = [];
    return this;
}

function error(){
    process.stderr.write(sgr.activeSeq());
    process.stderr.write(EL.activeSeq());
    err.apply(console, arguments);
    process.stderr.write(sgr.seq("reset"));
    sgr.activeFlags = [];
    return this;
}

function write(txt){
    out.write(sgr.activeSeq());
    out.write(EL.activeSeq());
    out.write(String(txt));
    out.write(sgr.seq("reset"));
    sgr.activeFlags = [];
    return this;
}

function hideCursor(){
    out.write(csi + otherCodes.hide);
}
function showCursor(){
    out.write(csi + otherCodes.show);
}

function column(col){
    out.write(util.format("%s%dG", csi, col));
    return this;
}

function test(){
    require("./examples/summary");
}

function clearToScreenEnd(){
    out.write(util.format("%s0J", csi));
    return exports;
}
function clearToScreenBegin(){
    out.write(util.format("%s1J", csi));
    return exports;
}
function clearScreen(){
    out.write(util.format("%s2J", csi));
    return exports;
}
function cursorPosition(row, column){
    row = row || 1;
    column = column || 1;
    out.write(util.format("%s%s;%sH", csi, row, column));
    return exports;
}
function cursorLinesDown(n){
    cursorDown(n);
    column(1);
    return exports;
}
function cursorLinesUp(n){
    cursorUp(n);
    column(1);
    return exports;
}
function cursorSave(){
    out.write(csi + "s");
    return exports;
}
function cursorRestore(){
    out.write(csi + "u");
    return exports;
}
function cursorDown(n){
    if (!n) n = 1;
    out.write(util.format("%s%sB", csi, n));
    return exports;
}
function cursorUp(n){
    if (!n) n = 1;
    out.write(util.format("%s%sA", csi, n));
    return exports;
}
