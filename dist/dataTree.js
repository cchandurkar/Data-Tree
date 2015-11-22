(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Tree = require('./tree');
module.exports = (function(){
  return new Tree();
});

},{"./tree":4}],2:[function(require,module,exports){

module.exports = (function(){

  var Traverser = function(tree){
    this._tree = tree;
  };

  Traverser.prototype.traverseDFS = function(callback){
    (function recur(node){
      callback(node);
      node._childNodes.forEach(recur);
    }(this._tree._rootNode));
  };

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

  Traverser.prototype.traverseBFS = function(callback){
    callback(this._tree._rootNode);
    (function recur(node){
      node._childNodes.forEach(callback);
      node._childNodes.forEach(recur);
    }(this._tree._rootNode));
  };

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

  var TreeNode = function(data){
    this._parentNode = null;
    this._childNodes = [];
    this._data = data;
  };

  TreeNode.prototype.matchCriteria = function(criteria){
    return criteria(this._data);
  };

  return TreeNode;

}());

},{}],4:[function(require,module,exports){
var TreeNode = require('./tree-node');
var Traverser = require('./traverser');
module.exports = (function(){

  var Tree = function(){
    this._rootNode = null;
    this._currentNode = null;
    this._traverser = new Traverser(this);
  };

  Tree.prototype.insert = function(data){
    var node = new TreeNode(data);
    if(this._rootNode === null && this._currentNode === null){
      this._rootNode = this._currentNode = node;
    } else {
      node._parentNode = this._currentNode;
      this._currentNode._childNodes.push(node);
      this._currentNode = node;
    }
  };

  Tree.prototype.remove = function(node, removeChildren){

    // Hold `this`
    var thiss = this;

    // if removeChildren ; remove all children recursively
    if(removeChildren){
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

  Tree.prototype.traverser = function(){
    return this._traverser;
  };

  Tree.prototype.insertTo = function(criteria, data){
    var node = this.searchDFS(criteria);
    this.insertToNode(node, data);
  };

  Tree.prototype.insertToNode = function(node, data){
    var newNode = new TreeNode(data);
    newNode._parentNode = node;
    node._childNodes.push(newNode);
    this._currentNode = newNode;
  };

  Tree.prototype.searchBFS = function(criteria){
    return this.traverser().searchBFS(criteria);
  };

  Tree.prototype.searchDFS = function(criteria){
    return this.traverser().searchDFS(criteria);
  };

  Tree.prototype.traverseDFS = function(callback){
    return this.traverser().traverseDFS(callback);
  };

  Tree.prototype.traverseBFS = function(callback){
    return this.traverser().traverseBFS(callback);
  };

  Tree.prototype.getChildNodesOf = function(node){
    return node._childNodes;
  };

  Tree.prototype.getParentNodeOf = function(node){
    return node._parentNode;
  };


  return Tree;

}());

},{"./traverser":2,"./tree-node":3}]},{},[1]);
