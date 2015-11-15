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

  Tree.prototype.traverser = function(){
    return this._traverser;
  };

  Tree.prototype.insertTo = function(criteria, data){
    var newNode = new TreeNode(data);
    var thiss = this;
    this.traverser().DFS(function(node){
      if(node.matchCriteria(criteria)){
        newNode._parentNode = node;
        node._childNodes.push(newNode);
        thiss._currentNode = newNode;
        return;
      }
    });
  };

  Tree.prototype.insertToNode = function(node, data){
    var newNode = new TreeNode(data);
    newNode._parentNode = node;
    node._childNodes.push(newNode);
    this._currentNode = newNode;
  };

  Tree.prototype.searchBFS = function(criteria){
    this.traverser().BFS(function(node){
      if(node.matchCriteria(criteria)){
        return node;
      }
    });
  };

  Tree.prototype.searchDFS = function(criteria){
    this.traverser().DFS(function(node){
      if(node.matchCriteria(criteria)){
        return node;
      }
    });
  };

  Tree.prototype.getChildNodesOf = function(node){
    return node._childNodes;
  };

  Tree.prototype.getParentNodeOf = function(node){
    return node._parentNode;
  };

  return Tree;

}());
