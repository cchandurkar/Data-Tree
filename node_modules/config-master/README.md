[![view on npm](http://img.shields.io/npm/v/config-master.svg)](https://www.npmjs.org/package/config-master)
[![npm module downloads per month](http://img.shields.io/npm/dm/config-master.svg)](https://www.npmjs.org/package/config-master)
[![Build Status](https://travis-ci.org/75lb/config-master.svg?branch=master)](https://travis-ci.org/75lb/config-master)
[![Dependency Status](https://david-dm.org/75lb/config-master.svg)](https://david-dm.org/75lb/config-master)

<a name="module_config-master"></a>
## config-master ⇒ <code>Object</code>
Merges together JSON data from the specified files, in the specified order. Designed for app config management.


| Param | Type | Description |
| --- | --- | --- |
| ...jsonPath | <code>string</code> | the paths of JSON files to merge. If the JSON data you want to merge is contained *within* the JSON file, pass an object specifying the `jsonPath` and `configProperty`. |

**Example**  
```js
var loadConfig = require("config-master");
var homePath = require("home-path");

var config = loadConfig(
    path.join(homePath(), ".config.json"),
    path.join(process.cwd(), ".config.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "dmd" }
);
```

* * *

&copy; 2015 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).
