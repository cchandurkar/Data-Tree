
module.exports = (function(){

  var Traverser = function(tree){
    this._tree = tree;
  };

  Traverser.prototype.DFS = function(callback){
    var explore = function(node){
      callback(node);
      node._childNodes.forEach(function(_childNode){
        explore(_childNode);
      });
    }; explore(this._tree._rootNode);
  };

  Traverser.prototype.BFS = function(callback){
    var explore = function(node){
      if(node) node._childNodes.forEach(callback);
      if(node) node._childNodes.forEach(explore)
    }; callback(this._tree._rootNode); explore(this._tree._rootNode);
  };

  return Traverser;

}());
