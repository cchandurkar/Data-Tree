[![view on npm](http://img.shields.io/npm/v/ddata.svg)](https://www.npmjs.org/package/ddata)
[![npm module downloads per month](http://img.shields.io/npm/dm/ddata.svg)](https://www.npmjs.org/package/ddata)
[![Build Status](https://travis-ci.org/jsdoc2md/ddata.svg?branch=master)](https://travis-ci.org/jsdoc2md/ddata)
[![Dependency Status](https://david-dm.org/jsdoc2md/ddata.svg)](https://david-dm.org/jsdoc2md/ddata)

<a name="module_ddata"></a>
## ddata
ddata is a collection of handlebars helpers for working with the documentation data output by [jsdoc-parse](https://github.com/75lb/jsdoc-parse).

**Example**  
```js
var handlebars = require("handlebars");
var ddata = require("ddata");
var docs = require("./docs.json"); // jsdoc-parse output

handlebars.registerHelper(ddata);
var template =
"{{#module name='yeah-module'}}\
The author of the module is: {{author}}.\
{{/module}}";
console.log(handlebars.compile(template)(docs));
```

* [ddata](#module_ddata)
  * _static_
    * [._globals()](#module_ddata._globals)
    * [._link(input, options)](#module_ddata._link)
    * [.isClass()](#module_ddata.isClass) ⇒ <code>boolean</code>
    * [.isClassMember()](#module_ddata.isClassMember) ⇒ <code>boolean</code>
    * [.isEvent()](#module_ddata.isEvent) ⇒ <code>boolean</code>
    * [._identifiers()](#module_ddata._identifiers) ⇒ <code>array</code>
    * [._children([sortBy], [min])](#module_ddata._children) ⇒ <code>Array.&lt;identifier&gt;</code>
    * [.descendants([sortBy], [min])](#module_ddata.descendants) ⇒ <code>Array.&lt;identifier&gt;</code>
    * [.exported()](#module_ddata.exported) ⇒ <code>identifier</code>
    * [._identifier()](#module_ddata._identifier)
    * [.parentObject()](#module_ddata.parentObject)
    * [.parseLink(text)](#module_ddata.parseLink) ⇒ <code>Array.&lt;{original: string, caption: string, url: string}&gt;</code>
    * [.parentName()](#module_ddata.parentName) ⇒ <code>string</code>
    * [.option()](#module_ddata.option)
    * [.optionEquals()](#module_ddata.optionEquals)
    * [.optionSet()](#module_ddata.optionSet)
    * [.optionIsSet()](#module_ddata.optionIsSet)
    * [.indent()](#module_ddata.indent)
    * [.stripNewlines()](#module_ddata.stripNewlines)
    * [.headingDepth()](#module_ddata.headingDepth)
    * [.depth()](#module_ddata.depth)
    * [.depthIncrement()](#module_ddata.depthIncrement)
    * [.depthDecrement()](#module_ddata.depthDecrement)
    * [.indexDepth()](#module_ddata.indexDepth)
    * [.indexDepthIncrement()](#module_ddata.indexDepthIncrement)
    * [.indexDepthDecrement()](#module_ddata.indexDepthDecrement)
    * [.indexDepth()](#module_ddata.indexDepth)
    * _Block helper: selector_
      * [.identifiers()](#module_ddata.identifiers)
      * [.orphans()](#module_ddata.orphans)
      * [.globals()](#module_ddata.globals)
      * [.modules()](#module_ddata.modules)
      * [.module()](#module_ddata.module)
      * [.identifier()](#module_ddata.identifier)
      * [.classes()](#module_ddata.classes)
      * [.functions()](#module_ddata.functions)
      * [.class()](#module_ddata.class)
      * [.function()](#module_ddata.function)
      * [.namespace()](#module_ddata.namespace)
      * [.enum()](#module_ddata.enum)
      * [.misc()](#module_ddata.misc)
      * [.children()](#module_ddata.children)
      * [.indexChildren()](#module_ddata.indexChildren)
    * _Block helper: util_
      * [.link(id)](#module_ddata.link)
      * [.returnSig2()](#module_ddata.returnSig2) ⇒ <code>Object</code>
    * _Returns list_
      * [._orphans()](#module_ddata._orphans) ⇒ <code>array</code>
    * _Returns string_
      * [.anchorName()](#module_ddata.anchorName) ⇒ <code>string</code>
      * [.md()](#module_ddata.md)
      * [.methodSig()](#module_ddata.methodSig) ⇒ <code>string</code>
    * _returns boolean_
      * [.showMainIndex()](#module_ddata.showMainIndex) ⇒ <code>boolean</code>
  * _inner_
    * _Block helper: util_
      * [~sig()](#module_ddata..sig)

<a name="module_ddata._globals"></a>
### ddata._globals()
omits externals without a description

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata._link"></a>
### ddata._link(input, options)
e.g. namepaths `module:Something` or type expression `Array.<module:Something>`

**Kind**: static method of <code>[ddata](#module_ddata)</code>  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | namepath or type expression |
| options | <code>object</code> | the handlebars helper options object |

<a name="module_ddata.isClass"></a>
### ddata.isClass() ⇒ <code>boolean</code>
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**this**: <code>{identifier}</code>  
<a name="module_ddata.isClassMember"></a>
### ddata.isClassMember() ⇒ <code>boolean</code>
returns true if the parent of the current identifier is a class

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.isEvent"></a>
### ddata.isEvent() ⇒ <code>boolean</code>
returns true if this is an event

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata._identifiers"></a>
### ddata._identifiers() ⇒ <code>array</code>
Returns an array of identifiers matching the query

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata._children"></a>
### ddata._children([sortBy], [min]) ⇒ <code>Array.&lt;identifier&gt;</code>
return the identifiers which are a `memberof` this one. Exclude externals without descriptions.

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**this**: <code>{identifier}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [sortBy] | <code>string</code> | "kind" |
| [min] | <code>number</code> | only returns if there are `min` children |

<a name="module_ddata.descendants"></a>
### ddata.descendants([sortBy], [min]) ⇒ <code>Array.&lt;identifier&gt;</code>
return a flat list containing all decendants

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**this**: <code>{identifier}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [sortBy] | <code>string</code> | "kind" |
| [min] | <code>number</code> | only returns if there are `min` children |

<a name="module_ddata.exported"></a>
### ddata.exported() ⇒ <code>identifier</code>
returns the exported identifier of this module

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**this**: <code>{identifier}</code>  
<a name="module_ddata._identifier"></a>
### ddata._identifier()
Returns an identifier matching the query

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.parentObject"></a>
### ddata.parentObject()
Returns the parent

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.parseLink"></a>
### ddata.parseLink(text) ⇒ <code>Array.&lt;{original: string, caption: string, url: string}&gt;</code>
extracts url and caption data from @link tags

**Kind**: static method of <code>[ddata](#module_ddata)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | a string containing one or more {@link} tags |

<a name="module_ddata.parentName"></a>
### ddata.parentName() ⇒ <code>string</code>
returns the parent name, instantiated if necessary

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**this**: <code>{identifier}</code>  
<a name="module_ddata.option"></a>
### ddata.option()
returns a dmd option, e.g. "sort-by", "heading-depth" etc.

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.optionEquals"></a>
### ddata.optionEquals()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.optionSet"></a>
### ddata.optionSet()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.optionIsSet"></a>
### ddata.optionIsSet()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.indent"></a>
### ddata.indent()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.stripNewlines"></a>
### ddata.stripNewlines()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.headingDepth"></a>
### ddata.headingDepth()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.depth"></a>
### ddata.depth()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.depthIncrement"></a>
### ddata.depthIncrement()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.depthDecrement"></a>
### ddata.depthDecrement()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.indexDepth"></a>
### ddata.indexDepth()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.indexDepthIncrement"></a>
### ddata.indexDepthIncrement()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.indexDepthDecrement"></a>
### ddata.indexDepthDecrement()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.indexDepth"></a>
### ddata.indexDepth()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
<a name="module_ddata.identifiers"></a>
### ddata.identifiers()
render the supplied block for each identifier in the query

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.orphans"></a>
### ddata.orphans()
render the supplied block for each parent (global identifier, or module)

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.globals"></a>
### ddata.globals()
render the supplied block for each parent (global identifier, or module)

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.modules"></a>
### ddata.modules()
render the supplied block for each module

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.module"></a>
### ddata.module()
render the supplied block for the specified module

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.identifier"></a>
### ddata.identifier()
render the supplied block for the specified identifier

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.classes"></a>
### ddata.classes()
render the block for each class

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.functions"></a>
### ddata.functions()
render the block for each function/method

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.class"></a>
### ddata.class()
render the supplied block for the specified class

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.function"></a>
### ddata.function()
render the supplied block for the specified function

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.namespace"></a>
### ddata.namespace()
render the supplied block for the specified function

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.enum"></a>
### ddata.enum()
render the supplied block for the specified enum

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.misc"></a>
### ddata.misc()
render the supplied block for each orphan with no scope set

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.children"></a>
### ddata.children()
render the supplied block for each child

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.indexChildren"></a>
### ddata.indexChildren()
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: selector  
<a name="module_ddata.link"></a>
### ddata.link(id)
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: util  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the ID to link to, e.g. `external:XMLHttpRequest`, `GlobalClass#propOne` etc. |

**Example**  
```hbs
{{#link "module:someModule.property"~}}
  {{name}} {{!-- prints 'property' --}}
  {{url}}  {{!-- prints 'module-someModule-property' --}}
{{/link}}
```
<a name="module_ddata.returnSig2"></a>
### ddata.returnSig2() ⇒ <code>Object</code>
**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: util  
<a name="module_ddata._orphans"></a>
### ddata._orphans() ⇒ <code>array</code>
Returns an array of the top-level elements which have no parents. Output only includes externals which have a description.

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Returns list  
<a name="module_ddata.anchorName"></a>
### ddata.anchorName() ⇒ <code>string</code>
returns a unique ID string suitable for use as an `href`.

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Returns string  
**this**: <code>{identifier}</code>  
**Example**  
```js
> ddata.anchorName.call({ id: "module:yeah--Yeah()" })
'module_yeah--Yeah_new'
```
<a name="module_ddata.md"></a>
### ddata.md()
converts the supplied text to markdown

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Returns string  
<a name="module_ddata.methodSig"></a>
### ddata.methodSig() ⇒ <code>string</code>
Returns the method signature, e.g. `(options, [onComplete])`

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: Returns string  
**this**: <code>{identifier}</code>  
<a name="module_ddata.showMainIndex"></a>
### ddata.showMainIndex() ⇒ <code>boolean</code>
True if there at least two top-level identifiers (i.e. globals or modules)

**Kind**: static method of <code>[ddata](#module_ddata)</code>  
**Category**: returns boolean  
<a name="module_ddata..sig"></a>
### ddata~sig()
**Kind**: inner method of <code>[ddata](#module_ddata)</code>  
**Category**: Block helper: util  

* * * 
&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
