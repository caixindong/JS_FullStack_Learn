//用一个二维数组初始化一个map,ES6之后才有
var m = new Map([['xiaoming',23],['xiaohong',24]]);
console.log(m.get('xiaoming'));

m.set('dom',28);
m.delete('xiaoming')
console.log(m);


var s = new Set([1,2,3]);
s.add(3);
s.add(4);
s.delete(1);
console.log(s);
