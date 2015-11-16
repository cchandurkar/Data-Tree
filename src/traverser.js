
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
        return foundNode = node;
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
      console.log("node", node._data)
      if(node.matchCriteria(criteria)){
        return foundNode = node;
      } else {
        node._childNodes.some(recur);
      }
    }(this._tree._rootNode));

    return foundNode;

  };

  return Traverser;

}());
