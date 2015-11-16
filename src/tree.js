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
    this.insertToNode(node, data)
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
