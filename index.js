
module.exports = dataTree = (function(){
  return {
    create: require('./src/')
  };
}());


var treeOne = dataTree.create();
treeOne.insert({key: '#s3m458', value: [34, 76, 88]});
treeOne.insert({key: '#k56j75', value: [20, 20, 100]});
treeOne.insert({key: '#456d', value: [20, 20, 100]});
treeOne.insert({key: '#k5dfg6j75', value: [20, 20, 100]});
treeOne.insert({key: '#k56dfgj75', value: [20, 20, 100]});

treeOne.insertTo(function(data){
  return data.key === '#s3m458';
}, {key: '#5464', value:[100, 100]});

treeOne.searchDFS(function(node){
  console.log(node);
  return null;
});


// console.log("tree", treeOne);
