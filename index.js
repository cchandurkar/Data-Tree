var Tree = require('./src/tree');

(function(){

  // Wrap Data Tree Instance Creation
  var dataTree = {
    create: function(){
      return new Tree();
    }
  };

  // Export
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = dataTree;
    } else {
      if(typeof define === 'function' && define.amd){
        define([], function() { return dataTree; });
      } else {
        window.dataTree = dataTree;
      }
    } if(typeof global !== 'undefined') global.dataTree = dataTree;

}());
