
// Import Data Tree
var dataTree = require('../index');

// Test dataTree
describe('Tree', function(){

  // Create Tree
  var tree = dataTree.create();

  // Check if dataTree is not null
  it("should not be null", function () {
      expect(tree).not.toBe(null);
  });

  // Check Empty
  it("should not have any node", function () {
      expect(tree.isEmpty()).toBe(true);
  });

  // Test dataTree
  describe('Root Node', function(){



    // Check if dataTree is not null
    it("should not be null", function () {

      // Insert First Node
      var rootNode = tree.insert({
        name: 'Sample Data',
        key: 123927898273482,
        data: [34, 56, 87]
      });

      expect(rootNode).not.toBe(null);

    });

    // Check Empty
    it("should not have a parent", function () {
      expect(tree.rootNode().parentNode()).toBe(null);
    });

    // Check Empty
    it("should be a current node", function () {
      expect(tree.rootNode()).toEqual(tree.currentNode());
    });

  });

});
