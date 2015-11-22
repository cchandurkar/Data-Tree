<a name="traverseDFS"></a>
## traverseDFS(callback)
Indicates whether this node matches the specified criteria. It triggers a callback criteria function that returns something.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function that specifies some criteria. It receives [TreeNode#_data](TreeNode#_data) in parameter and expects different values in different scenarios. `matchCriteria` is used by following functions and expects: 1. [Tree#searchBFS](Tree#searchBFS) - {boolean} in return indicating whether given node satisfies criteria. 2. [Tree#searchDFS](Tree#searchDFS) - {boolean} in return indicating whether given node satisfies criteria. 3. [Tree#export](Tree#export) - {object} in return indicating formatted data object. |

