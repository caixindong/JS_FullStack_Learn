var str = 'abcdefg';
var buff = new Buffer(str,'utf-8');
console.log(buff);

var buff2 = new Buffer(20);
console.log(buff2[10]);
buff2[10] = -20;
console.log('负数取值：' + buff2[10]);
buff2[10] = 3.14;
console.log('小数取值：' + buff2[10]);
buff2[10] = 256;
console.log('大于255取值：' + buff2[10]);
