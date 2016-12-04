var xiaoming = {
  name: '小明',
  age: 22,
};

console.log(xiaoming.name);

//判断xiaoming这个对象是否有name这个属性，这个属性可能继承得到
console.log('name' in xiaoming);

//添加属性
xiaoming.birth = '1994-06-07';
console.log(xiaoming);

//删除属性
delete xiaoming['birth'];
console.log(xiaoming);

//判断一个属性是否是xiaoming自身拥有的，而不是继承得到的
console.log(xiaoming.hasOwnProperty('name'));
