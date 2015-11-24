## Classes
<dl>
<dt><a href="#Traverser">Traverser</a></dt>
<dd><p>Represents a traverser which searches/traverses the tree in BFS and DFS fashion.</p>
</dd>
<dt><a href="#TreeNode">TreeNode</a></dt>
<dd><p>Represents a node in the tree.</p>
</dd>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Represents the tree in which data nodes can be inserted</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#criteria">criteria</a> : <code>function</code></dt>
<dd><p>Callback that receives a node data in parameter and expects user to return one of following:</p>
<ol>
<li><a href="#Traverser+searchBFS">searchBFS</a> - {boolean} in return indicating whether given node satisfies criteria.</li>
<li><a href="#Traverser+searchDFS">searchDFS</a> - {boolean} in return indicating whether given node satisfies criteria.</li>
<li><a href="#Tree+export">export</a> - {object} in return indicating formatted data object.</li>
</ol>
</dd>
</dl>
<a name="Traverser"></a>
## Traverser
Represents a traverser which searches/traverses the tree in BFS and DFS fashion.

**Kind**: global class  

* [Traverser](#Traverser)
  * [new Traverser(tree)](#new_Traverser_new)
  * [.searchDFS(criteria)](#Traverser+searchDFS) ⇒ <code>object</code>
  * [.searchBFS(criteria)](#Traverser+searchBFS) ⇒ <code>object</code>
  * [.traverseDFS(callback)](#Traverser+traverseDFS)
  * [.traverseBFS(callback)](#Traverser+traverseBFS)

<a name="new_Traverser_new"></a>
### new Traverser(tree)

| Param | Description |
| --- | --- |
| tree | [Tree](#Tree) that has to be traversed or search. |

<a name="Traverser+searchDFS"></a>
### traverser.searchDFS(criteria) ⇒ <code>object</code>
Searches a tree in DFS fashion. Requires a search criteria to be provided.

**Kind**: instance method of <code>[Traverser](#Traverser)</code>  
**Returns**: <code>object</code> - - first [TreeNode](#TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

**Example**  
```js
// Search DFS
var node = tree.traverser().searchDFS(function(data){
 return data.key === '#greenapple';
});
```
<a name="Traverser+searchBFS"></a>
### traverser.searchBFS(criteria) ⇒ <code>object</code>
Searches a tree in BFS fashion. Requires a search criteria to be provided.

**Kind**: instance method of <code>[Traverser](#Traverser)</code>  
**Returns**: <code>object</code> - - first [TreeNode](#TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

**Example**  
```js
// Search BFS
var node = tree.traverser().searchBFS(function(data){
 return data.key === '#greenapple';
});
```
<a name="Traverser+traverseDFS"></a>
### traverser.traverseDFS(callback)
Traverses an entire tree in DFS fashion.

**Kind**: instance method of <code>[Traverser](#Traverser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when @{link TreeNode} is explored. Explored node is passed as parameter to callback. |

**Example**  
```js
// Traverse DFS
tree.traverser().traverseDFS(function(node){
 console.log(node.data);
});
```
<a name="Traverser+traverseBFS"></a>
### traverser.traverseBFS(callback)
Traverses an entire tree in BFS fashion.

**Kind**: instance method of <code>[Traverser](#Traverser)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

**Example**  
```js
// Traverse BFS
tree.traverser().traverseBFS(function(node){
 console.log(node.data);
});
```
<a name="TreeNode"></a>
## TreeNode
Represents a node in the tree.

**Kind**: global class  

* [TreeNode](#TreeNode)
  * [new TreeNode(data)](#new_TreeNode_new)
  * [.matchCriteria(callback)](#TreeNode+matchCriteria)

<a name="new_TreeNode_new"></a>
### new TreeNode(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | that is to be stored in a node |

<a name="TreeNode+matchCriteria"></a>
### treeNode.matchCriteria(callback)
Indicates whether this node matches the specified criteria. It triggers a callback criteria function that returns something.

**Kind**: instance method of <code>[TreeNode](#TreeNode)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function that specifies some criteria. It receives [TreeNode#_data](TreeNode#_data) in parameter and expects different values in different scenarios. `matchCriteria` is used by following functions and expects: 1. [Tree#searchBFS](Tree#searchBFS) - {boolean} in return indicating whether given node satisfies criteria. 2. [Tree#searchDFS](Tree#searchDFS) - {boolean} in return indicating whether given node satisfies criteria. 3. [export](#Tree+export) - {object} in return indicating formatted data object. |

<a name="Tree"></a>
## Tree
Represents the tree in which data nodes can be inserted

**Kind**: global class  

* [Tree](#Tree)
  * [.insert(data)](#Tree+insert) ⇒ <code>object</code>
  * [.remove(node, trim)](#Tree+remove)
  * [.trimBranchFrom(node)](#Tree+trimBranchFrom)
  * [.traverser()](#Tree+traverser) ⇒
  * [.insertTo(criteria, data)](#Tree+insertTo) ⇒ <code>object</code>
  * [.insertToNode(node, data)](#Tree+insertToNode) ⇒ <code>object</code>
  * [.getChildNodesOf()](#Tree+getChildNodesOf) ⇒ <code>array</code>
  * [.getParentNodeOf()](#Tree+getParentNodeOf) ⇒ <code>object</code>
  * [.export(criteria)](#Tree+export) ⇒ <code>object</code>
  * [.import(data, childProperty, criteria)](#Tree+import) ⇒ <code>object</code>

<a name="Tree+insert"></a>
### tree.insert(data) ⇒ <code>object</code>
Creates a [TreeNode](#TreeNode) that contains the data provided and insert it in a tree.
New node gets inserted to the `_currentNode` which updates itself upon every insertion and deletion.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - instance of [TreeNode](#TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | data that has to be stored in tree-node. |

**Example**  
```js
// Insert single value
tree.insert(183);

// Insert array of values
tree.insert([34, 565, 78]);

// Insert complex data
tree.insert({
  key: '#berries',
  value: { name: 'Apple', color: 'Red'}
});
```
<a name="Tree+remove"></a>
### tree.remove(node, trim)
Removes a node from tree and updates `_currentNode` to parent node of node removed.

**Kind**: instance method of <code>[Tree](#Tree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | [TreeNode](#TreeNode) that has to be removed. |
| trim | <code>boolean</code> | indicates whether to remove entire branch from the specified node. |

<a name="Tree+trimBranchFrom"></a>
### tree.trimBranchFrom(node)
Remove an entire branch starting with specified node.

**Kind**: instance method of <code>[Tree](#Tree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | [TreeNode](#TreeNode) from which entire branch has to be removed. |

<a name="Tree+traverser"></a>
### tree.traverser() ⇒
Getter function that returns [Traverser](#Traverser).

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: [Traverser](#Traverser) for the tree.  
<a name="Tree+insertTo"></a>
### tree.insertTo(criteria, data) ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is searched
in the tree based on the criteria provided.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - instance of [TreeNode](#TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria for node to which new node is to be inserted. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |
| data | <code>object</code> | that has to be stored in tree-node. |

**Example**  
```js
// Insert data
tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

// New Data
var greenApple = {
 key: '#greenapple',
 value: { name: 'Green Apple', color: 'Green' }
};

// Insert data to node which has `key` = #apple
tree.insertTo(function(data){
 return data.key === '#apple'
}, greenApple);
```
<a name="Tree+insertToNode"></a>
### tree.insertToNode(node, data) ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is an instance of [TreeNode](#TreeNode)

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - instance of [TreeNode](#TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>function</code> | [TreeNode](#TreeNode) to which data node is to be inserted. |
| data | <code>object</code> | that has to be stored in tree-node. |

**Example**  
```js
// Insert data
var node = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

// New Data
var greenApple = {
 key: '#greenapple',
 value: { name: 'Green Apple', color: 'Green' }
};

// Insert data to node
tree.insertToNode(node, greenApple);
```
<a name="Tree+getChildNodesOf"></a>
### tree.getChildNodesOf() ⇒ <code>array</code>
Get all child nodes of [TreeNode](#TreeNode) specified.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>array</code> - - array of [TreeNode](#TreeNode)s.  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](#TreeNode) of which child nodes are to be accessed. |

<a name="Tree+getParentNodeOf"></a>
### tree.getParentNodeOf() ⇒ <code>object</code>
Get parent node of [TreeNode](#TreeNode) specified.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - [TreeNode](#TreeNode).  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](#TreeNode) of which parent node is to be accessed. |

<a name="Tree+export"></a>
### tree.export(criteria) ⇒ <code>object</code>
Exports the tree data in format specified. It maintains herirachy by adding
additional "children" property to returned value of `criteria` callback.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - [TreeNode](#TreeNode).  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>Tree~criteria</code> | Callback function that receives data in parameter and MUST return a formatted data that has to be exported. A new property "children" is added to object returned that maintains the heirarchy of nodes. |

**Example**  
```js
var rootNode = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

tree.insert({
  key: '#greenapple',
  value: { name: 'Green Apple', color: 'Green'}
});

tree.insertToNode(rootNode,  {
 key: '#someanotherapple',
 value: { name: 'Some Apple', color: 'Some Color' }
});

// Export the tree
var exported = tree.export(function(data){
 return { name: data.value.name };
});

// Result in `exported`
{
 "name": "Apple",
 "children": [
   {
     "name": "Green Apple",
     "children": []
   },
   {
     "name": "Some Apple",
     "children": []
  }
 ]
}
```
<a name="Tree+import"></a>
### tree.import(data, childProperty, criteria) ⇒ <code>object</code>
Imports the JSON data into a tree using the criteria provided.
A property indicating the nesting of object must be specified.

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>object</code> - - [Tree](#Tree).  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | JSON data that has be imported |
| childProperty | <code>string</code> | Name of the property that holds the nested data. |
| criteria | <code>Tree~criteria</code> | Callback function that receives data in parameter and MUST return a formatted data that has to be imported in a tree. |

**Example**  
```js
var data = {
  "trailId": "h2e67d4ea-f85f40e2ae4a06f4777864de",
  "initiatedAt": 1448393492488,
  "snapshots": {
     "snapshotId": "b3d132131-213c20f156339ea7bdcb6273",
     "capturedAt": 1448393495353,
     "thumbnail": "data:img",
     "children": [
      {
       "snapshotId": "yeb7ab27c-b36ff1b04aefafa9661243de",
       "capturedAt": 1448393499685,
       "thumbnail": "data:image/",
       "children": [
         {
           "snapshotId": "a00c9828f-e2be0fc4732f56471e77947a",
           "capturedAt": 1448393503061,
           "thumbnail": "data:image/png;base64",
           "children": []
         }
       ]
     }
    ]
  }
};

 // Import
 // This will result in a tree having nodes containing `id` and `thumbnail` as data 
 tree.import(data, 'children', function(nodeData){
   return {
     id: nodeData.snapshotId,
     thumbnail: nodeData.thumbnail
    }
 });
```
<a name="criteria"></a>
## criteria : <code>function</code>
Callback that receives a node data in parameter and expects user to return one of following:
1. [searchBFS](#Traverser+searchBFS) - {boolean} in return indicating whether given node satisfies criteria.
2. [searchDFS](#Traverser+searchDFS) - {boolean} in return indicating whether given node satisfies criteria.
3. [export](#Tree+export) - {object} in return indicating formatted data object.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | data of particular [TreeNode](#TreeNode) |

