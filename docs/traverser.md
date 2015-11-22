## Functions
<dl>
<dt><a href="#traverseDFS">traverseDFS(callback)</a></dt>
<dd><p>Traverses an entire tree in DFS fashion.</p>
</dd>
<dt><a href="#searchBFS">searchBFS(criteria)</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in DFS fashion. Requires a search criteria to be provided.</p>
</dd>
<dt><a href="#traverseBFS">traverseBFS(callback)</a></dt>
<dd><p>Traverses an entire tree in BFS fashion.</p>
</dd>
<dt><a href="#searchBFS">searchBFS(criteria)</a> ⇒ <code>object</code></dt>
<dd><p>Searches a tree in BFS fashion. Requires a search criteria to be provided.</p>
</dd>
</dl>
<a name="traverseDFS"></a>
## traverseDFS(callback)
Traverses an entire tree in DFS fashion.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when @{link TreeNode} is explored. Explored node is passed as parameter to callback. |

<a name="searchBFS"></a>
## searchBFS(criteria) ⇒ <code>object</code>
Searches a tree in DFS fashion. Requires a search criteria to be provided.

**Kind**: global function  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

<a name="traverseBFS"></a>
## traverseBFS(callback)
Traverses an entire tree in BFS fashion.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Gets triggered when node is explored. Explored node is passed as parameter to callback. |

<a name="searchBFS"></a>
## searchBFS(criteria) ⇒ <code>object</code>
Searches a tree in BFS fashion. Requires a search criteria to be provided.

**Kind**: global function  
**Returns**: <code>object</code> - - first [TreeNode](TreeNode) in tree that matches the given criteria.  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>function</code> | MUST BE a callback function that specifies the search criteria. Criteria callback here receives [TreeNode#_data](TreeNode#_data) in parameter and MUST return boolean indicating whether that data satisfies your criteria. |

