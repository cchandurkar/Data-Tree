(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Tree = require('./tree');
module.exports = (function(){
  return new Tree();
});

},{"./tree":4}],2:[function(require,module,exports){

module.exports = (function(){

  // Flag bad practises
  'use strict';

  // ------------------------------------
  // Basic Setup
  // ------------------------------------

  /**
   * Represents a traverser which traverses the tree.
   *
   * @class
   * @kind class
   * @constructor
   * @param {object} tree - instance of {@link Tree} which has to be traversed.
   */
  var Traverser = function(tree){

    if(!tree)
    throw new Error('Could not find a tree that is to be traversed');

    /**
     * Represents the {@link Tree} which has to be traversed.
     *
     * @property _tree
     * @type {object}
     * @default "null"
     */
    this._tree = tree;

  };

  /**
   * Traverses an entire tree in DFS fashion.
   *
   * @method traverseDFS
   * @kind function
   * @param {function} callback - Gets triggered when @{link TreeNode} is explored. Explored node is passed as parameter to callback.
   */
  Traverser.prototype.traverseDFS = function(callback){
    (function recur(node){
      callback(node);
      node._childNodes.forEach(recur);
    }(this._tree._rootNode));
  };

  /**
   * Searches a tree in DFS fashion. Requires a search criteria to be provided.
   *
   * @method searchBFS
   * @kind function
   * @param {function} criteria - MUST BE a callback function that specifies the search criteria.
   * Criteria callback here receives {@link TreeNode#_data} in parameter and MUST return boolean
   * indicating whether that data satisfies your criteria.
   * @return {object} - first {@link TreeNode} in tree that matches the given criteria.
   */
  Traverser.prototype.searchDFS = function(criteria){

    // Hold the node when found
    var foundNode = null;

    // Find node recursively
    (function recur(node){
      if(node.matchCriteria(criteria)){
        foundNode = node;
        return foundNode;
      } else {
        node._childNodes.some(recur);
      }
    }(this._tree._rootNode));

    return foundNode;
  };

  /**
   * Traverses an entire tree in BFS fashion.
   *
   * @method traverseBFS
   * @kind function
   * @param {function} callback - Gets triggered when node is explored. Explored node is passed as parameter to callback.
   */
  Traverser.prototype.traverseBFS = function(callback){
    callback(this._tree._rootNode);
    (function recur(node){
      node._childNodes.forEach(callback);
      node._childNodes.forEach(recur);
    }(this._tree._rootNode));
  };

  /**
   * Searches a tree in BFS fashion. Requires a search criteria to be provided.
   *
   * @method searchBFS
   * @kind function
   * @param {function} criteria - MUST BE a callback function that specifies the search criteria.
   * Criteria callback here receives {@link TreeNode#_data} in parameter and MUST return boolean
   * indicating whether that data satisfies your criteria.
   * @return {object} - first {@link TreeNode} in tree that matches the given criteria.
   */
  Traverser.prototype.searchBFS = function(criteria){

    // Hold the node when found
    var foundNode = null;

    // Find nodes recursively
    (function recur(node){
      if(node.matchCriteria(criteria)){
        foundNode = node;
        return foundNode;
      } else {
        node._childNodes.some(recur);
      }
    }(this._tree._rootNode));

    return foundNode;

  };

  return Traverser;

}());

},{}],3:[function(require,module,exports){

module.exports = (function(){

  // Flag bad practises
  'use strict';

  // ------------------------------------
  // Basic Setup
  // ------------------------------------

  /**
   * Represents a node in the tree.
   *
   * @class
   * @kind class
   * @constructor
   * @param {object} data - that is to be stored in a node
   */
  var TreeNode = function(data){
    this._parentNode = null;
    this._childNodes = [];
    this._data = data;
  };

  /**
   * Indicates whether this node matches the specified criteria. It triggers a callback criteria function that returns something.
   *
   * @method traverseDFS
   * @kind function
   * @param {function} callback - Callback function that specifies some criteria. It receives {@link TreeNode#_data} in parameter and expects different values in different scenarios.
   * `matchCriteria` is used by following functions and expects:
   * 1. {@link Tree#searchBFS} - {boolean} in return indicating whether given node satisfies criteria.
   * 2. {@link Tree#searchDFS} - {boolean} in return indicating whether given node satisfies criteria.
   * 3. {@link Tree#export} - {object} in return indicating formatted data object.
   */
  TreeNode.prototype.matchCriteria = function(criteria){
    return criteria(this._data);
  };

  return TreeNode;

}());

},{}],4:[function(require,module,exports){
var TreeNode = require('./tree-node');
var Traverser = require('./traverser');
module.exports = (function(){

  // Flag bad practises
  'use strict';

  // ------------------------------------
  // Basic Setup
  // ------------------------------------

  /**
   * Represents the tree in which data nodes can be inserted
   *
   * @class
   * @kind class
   * @constructor
   */
  var Tree = function(){

    /**
     * Represents the root node of the tree.
     *
     * @property _rootNode
     * @type {object}
     * @default "null"
     */
    this._rootNode = null;

    /**
     * Represents the current node in question. `_currentNode` points to most recent
     * node inserted or parent node of most recent node removed.
     *
     * @property _currentNode
     * @type {object}
     * @default "null"
     */
    this._currentNode = null;

    /**
     * Represents the traverser which search/traverse a tree in DFS and BFS fashion.
     *
     * @property _traverser
     * @type {object}
     * @default {@link Traverser}
     */
    this._traverser = new Traverser(this);

  };

  /**
   * Inserts a node in tree and updates `_currentNode` to newly inserted node.
   *
   * @method insert
   * @kind function
   * @param {object} data - data that has to be stored in tree-node.
   * @return {object} - instance of {@link TreeNode} that represents node inserted.
   */
  Tree.prototype.insert = function(data){
    var node = new TreeNode(data);
    if(this._rootNode === null && this._currentNode === null){
      this._rootNode = this._currentNode = node;
    } else {
      node._parentNode = this._currentNode;
      this._currentNode._childNodes.push(node);
      this._currentNode = node;
    }
    return node;
  };

  /**
   * Removes a node from tree and updates `_currentNode` to parent node of node removed.
   *
   * @method remove
   * @kind function
   * @param {object} node - {@link TreeNode} that has to be removed.
   * @param {boolean} trim - indicates whether to remove entire branch from the specified node.
   */
  Tree.prototype.remove = function(node, trim){

    // Hold `this`
    var thiss = this;

    // if removeChildren ; remove all children recursively
    if(trim){
      node._childNodes.forEach(function(_child){
        thiss.remove(_child, removeChildren);
      });
    } else {

      // Check If node has parent node
      if(node._parentNode){

        // Take all child nodes and put in parent's _childNodes
        node._childNodes.forEach(function(_child){
          _child._parentNode = node._parentNode;
          node._parentNode._childNodes.push(_child);
        });

        // Remove node from parent's _childNodes
        var index = node._parentNode._childNodes.indexOf(node);
        node._parentNode._childNodes.splice(index, 1);

      } else {

        // Remove a rootNode
        this._rootNode = null;
        this._currentNode = null;

      }

      // Empty nodes `_childNodes`
      node._childNodes = [];

    }

    // Set parent and data to null
    node._parentNode = null;
    node._data = null;

  };

  /**
   * Getter function that returns {@link Traverser}.
   *
   * @method traverser
   * @kind function
   * @return {@link Traverser} for the tree.
   */
  Tree.prototype.traverser = function(){
    return this._traverser;
  };

  /**
   * Inserts node to a particular node present in the tree. Particular node here is searched
   * in the tree based on the criteria provided.
   *
   * @method insertTo
   * @kind function
   * @param {function} criteria - Callback function that specifies the search criteria
   * for node to which new node is to be inserted. Criteria callback here receives {@link TreeNode#_data}
   * in parameter and MUST return boolean indicating whether that data satisfies your criteria.
   * @param {object} data - that has to be stored in tree-node.
   * @return {object} - instance of {@link TreeNode} that represents node inserted.
   */
  Tree.prototype.insertTo = function(criteria, data){
    var node = this.searchDFS(criteria);
    return this.insertToNode(node, data);
  };

  /**
   * Inserts node to a particular node present in the tree. Particular node here is an instance of {@link TreeNode}
   *
   * @method insertToNode
   * @kind function
   * @param {function} node -  {@link TreeNode} to which data node is to be inserted.
   * @param {object} data - that has to be stored in tree-node.
   * @return {object} - instance of {@link TreeNode} that represents node inserted.
   */
  Tree.prototype.insertToNode = function(node, data){
    var newNode = new TreeNode(data);
    newNode._parentNode = node;
    node._childNodes.push(newNode);
    this._currentNode = newNode;
    return newNode;
  };

  /**
   * Searches a tree in BFS fashion. Requires a search criteria to be provided.
   *
   * @method searchBFS
   * @kind function
   * @param {function} criteria - Callback function that specifies the search criteria.
   * Criteria callback here receives {@link TreeNode#_data} in parameter and MUST return boolean
   * indicating whether that data satisfies your criteria.
   * @return {object} - first {@link TreeNode} in tree that matches the given criteria.
   */
  Tree.prototype.searchBFS = function(criteria){
    return this.traverser().searchBFS(criteria);
  };

  /**
   * Searches a tree in DFS fashion. Requires a search criteria to be provided.
   *
   * @method searchBFS
   * @kind function
   * @param {function} criteria - Callback function that specifies the search criteria.
   * Criteria callback here receives {@link TreeNode#_data} in parameter and MUST return boolean
   * indicating whether that data satisfies your criteria.
   * @return {object} - first {@link TreeNode} in tree that matches the given criteria.
   */
  Tree.prototype.searchDFS = function(criteria){
    return this.traverser().searchDFS(criteria);
  };

  /**
   * Traverses an entire tree in DFS fashion.
   *
   * @method traverseDFS
   * @kind function
   * @param {function} callback - Gets triggered when node is explored. Explored node is passed as parameter to callback.
   */
  Tree.prototype.traverseDFS = function(callback){
    this.traverser().traverseDFS(callback);
  };

  /**
   * Traverses an entire tree in BFS fashion.
   *
   * @method traverseBFS
   * @kind function
   * @param {function} callback - Gets triggered when node is explored. Explored node is passed as parameter to callback.
   */
  Tree.prototype.traverseBFS = function(callback){
    this.traverser().traverseBFS(callback);
  };

  /**
   * Get all child nodes of {@linl TreeNode} specified.
   *
   * @method getChildNodesOf
   * @kind function
   * @param {object} - {@link TreeNode} of which child nodes are to be accessed.
   * @return {array} - array of {@link TreeNode}s.
   */
  Tree.prototype.getChildNodesOf = function(node){
    return node._childNodes;
  };

  /**
   * Get parent node of {@linl TreeNode} specified.
   *
   * @method getParentNodeOf
   * @kind function
   * @param {object} - {@link TreeNode} of which parent node is to be accessed.
   * @return {object} - {@link TreeNode}.
   */
  Tree.prototype.getParentNodeOf = function(node){
    return node._parentNode;
  };

  /**
   * Exports the tree in format specified.
   *
   * @method export
   * @kind function
   * @param {object} criteria - Callback function that receives {@link TreeNode#_data} in parameter
   * and MUST return a formatted data that has to be exported. A new property "children" is added to object returned
   * that maintains the heirarchy of nodes.
   * @return {object} - {@link TreeNode}.
   */
  Tree.prototype.export = function(criteria){

    // Check if criteria is specified
    if(!criteria || typeof criteria !== 'function')
    throw new Error('Export criteria not specified');

    // Export every node recursively
    var exportRecur = function(node){
      var exported = node.matchCriteria(criteria);
      if(!exported || typeof exported !== 'object'){
        throw new Error('Export criteria should always return an object and it cannot be null.');
      } else {
        exported.children = [];
        node._childNodes.forEach(function(_child){
          exported.children.push(exportRecur(_child));
        });
        return exported;
      }
    };

    return recur_export(this._rootNode);
  };

  return Tree;

}());

},{"./traverser":2,"./tree-node":3}]},{},[1]);
