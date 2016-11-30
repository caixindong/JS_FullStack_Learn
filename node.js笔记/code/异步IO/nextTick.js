
//nextTick的优先级高于setImmediate
setImmediate(function(){
  console.log('setImmediate延迟执行');
});

process.nextTick(function(){
  console.log('nextTick延迟执行');
});
console.log('正常执行');

setTimeout(function(){
  console.log('延迟2S执行')
},2000);
