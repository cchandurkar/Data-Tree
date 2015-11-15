
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
