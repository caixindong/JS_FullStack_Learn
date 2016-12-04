var arr = [1,2,3];

console.log(arr.length);

console.log(arr.indexOf(2));
//相当于substr
console.log(arr.slice(0,2));

arr.push('a','2');
console.log(arr);
arr.pop();
console.log(arr);

//头部添加元素
arr.unshift('0','b');
console.log(arr);
//删除头部元素
arr.shift();
console.log(arr);

//排序
arr.sort();
console.log(arr);

//翻转
arr.reverse();
console.log(arr);

//splite万能方法，在2位置开始删除1个元素，再新添加‘add1’
arr.splice(2,1,'add1');
console.log(arr);

//连接
var newarr = arr.concat(['1','2']);
console.log(newarr);

//把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
var str = arr.join('-');
console.log(str);
