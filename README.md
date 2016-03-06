[![Build Status](https://travis-ci.org/cchandurkar/Data-Tree.svg?branch=master)](https://travis-ci.org/cchandurkar/Data-Tree) [![npm version](https://badge.fury.io/js/data-tree.svg)](https://badge.fury.io/js/data-tree) [![Dependency Status](https://david-dm.org/cchandurkar/data-tree.svg)](https://david-dm.org/cchandurkar/data-tree) [![devDependency Status](https://david-dm.org/cchandurkar/data-tree/dev-status.svg)](https://david-dm.org/cchandurkar/data-tree#info=devDependencies) [![Gitter](https://badges.gitter.im/cchandurkar/Data-Tree.svg)](https://gitter.im/cchandurkar/Data-Tree?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Data Tree
Data oriented tree structure that unleashes the power of callbacks to create, search and traverse tree. Data tree keeps the track of current node which updates upon insertion and deletion of the node from tree.

<img height="120" width="120" src="http://cchandurkar.github.io/data-tree/icon/icon.png"/>

## Install:
`$ npm install data-tree`<br /><br /> Then use via `require('data-tree')` **OR** use browserified build available at [dataTree.min.js](http://cchandurkar.github.io/Data-Tree/dataTree.min.js) in `<script/>` directly.

## Examples:
Following examples will guide you to create tree, insert/remove nodes and search/traverse a tree. Don't forget to checkout [Data-Tree reference](http://cchandurkar.github.io/Data-Tree/docs/).

### Create tree
`dataTree` is global variable that can be used to create a tree in following way.

```javascript
  var tree = dataTree.create();
```

### Insert data

```javascript
// Insert single value
tree.insert(183);

// Insert array of values
// NOTE: This does not create 3 different nodes. It considers an array as a whole data and puts in a single node.
tree.insert([34, 565, 78]);

// Insert Objects
tree.insert({
  key: '#berries',
  value: { name: 'Apple', color: 'Red'}
});
```

### Create and append node to a parent node that satisfies the given criteria

```javascript
// Insert data
tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

// New Data
var greenApple = {
  key: '#greenapple',
  value: { name: 'Green Apple', color: 'Green' }
};

// Insert data to node which has `key` = #apple
tree.insertTo(function(data){
  return data.key === '#apple'
}, greenApple);
```

### Create and append node using parent node's instance

```javascript
// Insert data
var node = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

// New Data
var greenApple = {
 key: '#greenapple',
 value: { name: 'Green Apple', color: 'Green' }
};

// Insert data to node
// This will create a new node with given data and append to parent node provided
tree.insertToNode(node, greenApple);
```

### Remove Node

```javascript
// Insert Node
var node = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

// Remove it
tree.remove(node);
```

### Search BFS

```javascript
var node = tree.traverser().searchBFS(function(data){
  return data.key === '#apple';
});
```

### Search DFS

```javascript
var node = tree.traverser().searchDFS(function(data){
  return data.key === '#apple';
});
```

### Traverse BFS

```javascript
tree.traverser().traverseBFS(function(node){
  console.log(node.data());
});
```

#### Traverse DFS

```javascript
tree.traverser().traverseDFS(function(node){
  console.log(node.data());
});
```

#### Find common parent

```javascript
var commonParent = tree.findCommonParent(fromNode, toNode);
```
## Developers
1. Clone this repositoy and `cd` into it
2. `npm install`
3. `npm run build` to build browserify files **OR** `npm run dev-server` to start a development server.
