## Members
<dl>
<dt><a href="#traverseDFS">traverseDFS</a></dt>
<dd><p>Traverses an entire tree in DFS fashion.</p>
</dd>
<dt><a href="#searchBFS">searchBFS</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in DFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#traverseBFS">traverseBFS</a></dt>
<dd><p>Traverses an entire tree in BFS fashion.</p>
</dd>
<dt><a href="#searchBFS">searchBFS</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in BFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#traverseDFS">traverseDFS</a></dt>
<dd><p>Indicates whether this node matches the specified criteria. It triggers a callback criteria function that returns something.</p>
</dd>
<dt><a href="#insert">insert</a> ⇒ <code>object</code></dt>
<dd><p>Inserts a node in tree and updates <code>_currentNode</code> to newly inserted node.</p>
</dd>
<dt><a href="#remove">remove</a></dt>
<dd><p>Removes a node from tree and updates <code>_currentNode</code> to parent node of node removed.</p>
</dd>
<dt><a href="#traverser">traverser</a> ⇒</dt>
<dd><p>Getter function that returns <a href="Traverser">Traverser</a>.</p>
</dd>
<dt><a href="#insertTo">insertTo</a> ⇒ <code>object</code></dt>
<dd><p>Inserts node to a particular node present in the tree. Particular node here is searched
in the tree based on the criteria provided.</p>
</dd>
<dt><a href="#insertToNode">insertToNode</a> ⇒ <code>object</code></dt>
<dd><p>Inserts node to a particular node present in the tree. Particular node here is an instance of <a href="TreeNode">TreeNode</a></p>
</dd>
<dt><a href="#searchBFS">searchBFS</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in BFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#searchBFS">searchBFS</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in DFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#traverseDFS">traverseDFS</a></dt>
<dd><p>Traverses an entire tree in DFS fashion.</p>
</dd>
<dt><a href="#traverseBFS">traverseBFS</a></dt>
<dd><p>Traverses an entire tree in BFS fashion.</p>
</dd>
<dt><a href="#getChildNodesOf">getChildNodesOf</a> ⇒ <code>array</code></dt>
<dd><p>Get all child nodes of {@linl TreeNode} specified.</p>
</dd>
<dt><a href="#getParentNodeOf">getParentNodeOf</a> ⇒ <code>object</code></dt>
<dd><p>Get parent node of {@linl TreeNode} specified.</p>
</dd>
<dt><a href="#export">export</a> ⇒ <code>object</code></dt>
<dd><p>Exports the tree in format specified.</p>
</dd>
</dl>
<a name="traverseDFS"></a>
## traverseDFS
Traverses an entire tree in DFS fashion.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when @{link TreeNode} is explored. Explored node is passed as parameter to callback. |

<a name="searchBFS"></a>
## searchBFS ⇒ <code>object</code>
Searches a tree in DFS fashion. Requires a search criteria to be provided.

**Kind**: global variable  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="traverseBFS"></a>
## traverseBFS
Traverses an entire tree in BFS fashion.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="searchBFS"></a>
## searchBFS ⇒ <code>object</code>
Searches a tree in BFS fashion. Requires a search criteria to be provided.

**Kind**: global variable  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="traverseDFS"></a>
## traverseDFS
Indicates whether this node matches the specified criteria. It triggers a callback criteria function that returns something.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function that specifies some criteria. It receives [TreeNode#_data](TreeNode#_data) in parameter and expects different values in different scenarios. `matchCriteria` is used by following functions and expects: 1. [Tree#searchBFS](Tree#searchBFS) - {boolean} in return indicating whether given node satisfies criteria. 2. [Tree#searchDFS](Tree#searchDFS) - {boolean} in return indicating whether given node satisfies criteria. 3. [Tree#export](Tree#export) - {object} in return indicating formatted data object. |

<a name="insert"></a>
## insert ⇒ <code>object</code>
Inserts a node in tree and updates `_currentNode` to newly inserted node.

**Kind**: global variable  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | data that has to be stored in tree-node. |

<a name="remove"></a>
## remove
Removes a node from tree and updates `_currentNode` to parent node of node removed.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | [TreeNode](TreeNode) that has to be removed. |
| trim | <code>boolean</code> | indicates whether to remove entire branch from the specified node. |

<a name="traverser"></a>
## traverser ⇒
Getter function that returns [Traverser](Traverser).

**Kind**: global variable  
**Returns**: [Traverser](Traverser) for the tree.  
<a name="insertTo"></a>
## insertTo ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is searched
in the tree based on the criteria provided.

**Kind**: global variable  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria for node to which new node is to be inserted. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |
| data | <code>object</code> | that has to be stored in tree-node. |

<a name="insertToNode"></a>
## insertToNode ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is an instance of [TreeNode](TreeNode)

**Kind**: global variable  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>function</code> | [TreeNode](TreeNode) to which data node is to be inserted. |
| data | <code>object</code> | that has to be stored in tree-node. |

<a name="searchBFS"></a>
## searchBFS ⇒ <code>object</code>
Searches a tree in BFS fashion. Requires a search criteria to be provided.

**Kind**: global variable  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="searchBFS"></a>
## searchBFS ⇒ <code>object</code>
Searches a tree in DFS fashion. Requires a search criteria to be provided.

**Kind**: global variable  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="traverseDFS"></a>
## traverseDFS
Traverses an entire tree in DFS fashion.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="traverseBFS"></a>
## traverseBFS
Traverses an entire tree in BFS fashion.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="getChildNodesOf"></a>
## getChildNodesOf ⇒ <code>array</code>
Get all child nodes of {@linl TreeNode} specified.

**Kind**: global variable  
**Returns**: <code>array</code> - - array of [TreeNode](TreeNode)s.  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](TreeNode) of which child nodes are to be accessed. |

<a name="getParentNodeOf"></a>
## getParentNodeOf ⇒ <code>object</code>
Get parent node of {@linl TreeNode} specified.

**Kind**: global variable  
**Returns**: <code>object</code> - - [TreeNode](TreeNode).  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](TreeNode) of which parent node is to be accessed. |

<a name="export"></a>
## export ⇒ <code>object</code>
Exports the tree in format specified.

**Kind**: global variable  
**Returns**: <code>object</code> - - [TreeNode](TreeNode).  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | Callback function that receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return a formatted data that has to be exported. A new property "children" is added to object returned that maintains the heirarchy of nodes. |

