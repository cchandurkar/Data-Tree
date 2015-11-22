## Functions
<dl>
<dt><a href="#insert">insert(data)</a> ⇒ <code>object</code></dt>
<dd><p>Inserts a node in tree and updates <code>_currentNode</code> to newly inserted node.</p>
</dd>
<dt><a href="#remove">remove(node, trim)</a></dt>
<dd><p>Removes a node from tree and updates <code>_currentNode</code> to parent node of node removed.</p>
</dd>
<dt><a href="#traverser">traverser()</a> ⇒</dt>
<dd><p>Getter function that returns <a href="Traverser">Traverser</a>.</p>
</dd>
<dt><a href="#insertTo">insertTo(criteria, data)</a> ⇒ <code>object</code></dt>
<dd><p>Inserts node to a particular node present in the tree. Particular node here is searched
in the tree based on the criteria provided.</p>
</dd>
<dt><a href="#insertToNode">insertToNode(node, data)</a> ⇒ <code>object</code></dt>
<dd><p>Inserts node to a particular node present in the tree. Particular node here is an instance of <a href="TreeNode">TreeNode</a></p>
</dd>
<dt><a href="#searchBFS">searchBFS(criteria)</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in BFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#searchBFS">searchBFS(criteria)</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in DFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#traverseDFS">traverseDFS(callback)</a></dt>
<dd><p>Traverses an entire tree in DFS fashion.</p>
</dd>
<dt><a href="#traverseBFS">traverseBFS(callback)</a></dt>
<dd><p>Traverses an entire tree in BFS fashion.</p>
</dd>
<dt><a href="#getChildNodesOf">getChildNodesOf()</a> ⇒ <code>array</code></dt>
<dd><p>Get all child nodes of {@linl TreeNode} specified.</p>
</dd>
<dt><a href="#getParentNodeOf">getParentNodeOf()</a> ⇒ <code>object</code></dt>
<dd><p>Get parent node of {@linl TreeNode} specified.</p>
</dd>
<dt><a href="#export">export(criteria)</a> ⇒ <code>object</code></dt>
<dd><p>Exports the tree in format specified.</p>
</dd>
</dl>
<a name="insert"></a>
## insert(data) ⇒ <code>object</code>
Inserts a node in tree and updates `_currentNode` to newly inserted node.

**Kind**: global function  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | data that has to be stored in tree-node. |

<a name="remove"></a>
## remove(node, trim)
Removes a node from tree and updates `_currentNode` to parent node of node removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | [TreeNode](TreeNode) that has to be removed. |
| trim | <code>boolean</code> | indicates whether to remove entire branch from the specified node. |

<a name="traverser"></a>
## traverser() ⇒
Getter function that returns [Traverser](Traverser).

**Kind**: global function  
**Returns**: [Traverser](Traverser) for the tree.  
<a name="insertTo"></a>
## insertTo(criteria, data) ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is searched
in the tree based on the criteria provided.

**Kind**: global function  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria for node to which new node is to be inserted. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |
| data | <code>object</code> | that has to be stored in tree-node. |

<a name="insertToNode"></a>
## insertToNode(node, data) ⇒ <code>object</code>
Inserts node to a particular node present in the tree. Particular node here is an instance of [TreeNode](TreeNode)

**Kind**: global function  
**Returns**: <code>object</code> - - instance of [TreeNode](TreeNode) that represents node inserted.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>function</code> | [TreeNode](TreeNode) to which data node is to be inserted. |
| data | <code>object</code> | that has to be stored in tree-node. |

<a name="searchBFS"></a>
## searchBFS(criteria) ⇒ <code>object</code>
Searches a tree in BFS fashion. Requires a search criteria to be provided.

**Kind**: global function  
**Returns**: <code>object</code> - first [TreeNode](../src/TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="searchBFS"></a>
## searchBFS(criteria) ⇒ <code>object</code>
Searches a tree in DFS fashion. Requires a search criteria to be provided.

**Kind**: global function  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | Callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="traverseDFS"></a>
## traverseDFS(callback)
Traverses an entire tree in DFS fashion.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="traverseBFS"></a>
## traverseBFS(callback)
Traverses an entire tree in BFS fashion.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="getChildNodesOf"></a>
## getChildNodesOf() ⇒ <code>array</code>
Get all child nodes of {@linl TreeNode} specified.

**Kind**: global function  
**Returns**: <code>array</code> - - array of [TreeNode](TreeNode)s.  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](TreeNode) of which child nodes are to be accessed. |

<a name="getParentNodeOf"></a>
## getParentNodeOf() ⇒ <code>object</code>
Get parent node of {@linl TreeNode} specified.

**Kind**: global function  
**Returns**: <code>object</code> - - [TreeNode](TreeNode).  

| Type | Description |
| --- | --- |
| <code>object</code> | [TreeNode](TreeNode) of which parent node is to be accessed. |

<a name="export"></a>
## export(criteria) ⇒ <code>object</code>
Exports the tree in format specified.

**Kind**: global function  
**Returns**: <code>object</code> - - [TreeNode](TreeNode).  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>object</code> | Callback function that receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return a formatted data that has to be exported. A new property "children" is added to object returned that maintains the heirarchy of nodes. |

