var Tree = require('./src/tree');
module.exports = dataTree = (function(){
  return {
    create: function(){
      return new Tree();
    }
  };
}());
