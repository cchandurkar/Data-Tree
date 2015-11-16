
module.exports = dataTree = (function(){
  return {
    create: require('./src/')
  };
}());


// var valu = ['a', 'b', 'c'].every(function(element) {
//     console.log(element);
//     if(element === 'b')
//       return false;
//     else return true;
// });
//
// console.log("value", valu);
// return;
var treeOne = dataTree.create();
treeOne.insert({key: '#s3m458', value: [34, 76, 88]});
treeOne.insert({key: '#k56j75', value: [20, 20, 100]});
treeOne.insert({key: '#456d', value: [20, 20, 100]});
treeOne.insert({key: '#casd', value: [20, 20, 100]});
treeOne.insert({key: '#45gdgj', value: [20, 20, 100]});

treeOne.insertTo(function(data){
  return data.key === '#s3m458';
}, {key: '#5464', value:[100, 100]});

treeOne.insertTo(function(data){
  return data.key === '#s3m458';
}, {key: '#5464', value:[456, 546]});

treeOne.insertTo(function(data){
  return data.key === '#s3m458';
}, {key: '#5464', value:[444, 1044440]});

treeOne.traverseDFS(function(node){
  console.log("value", node._data);
});
