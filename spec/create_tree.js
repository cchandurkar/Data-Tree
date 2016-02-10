


// Test and Return Tree
module.exports = (function(dataTree){

  // Create Tree
  var tree = dataTree.create();

  // Test dataTree
  describe('Tree', function(){

    // Check if dataTree is not null
    it("should not be null", function () {
        expect(tree).not.toBe(null);
    });



    // Check Empty
    it("should not have any node", function () {
        console.log("empty", tree.isEmpty());
        expect(tree.isEmpty()).toBe(true);
    });

  });

  return tree;

});
