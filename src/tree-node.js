
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
   * @kind member
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
