// 实现New

function _New(){

    let obj = {} // 创建一个对象
    let constructor = [].shift.call(arguments) // 获取构造函数
    obj.__proto__ = constructor.prototype  //对象原型指向构造函数原型 Object.setPrototypeOf(obj, Con.prototype)  同原理 将对象与构造函数原型链接起来

    var res = constructor.apply(obj,arguments) // 将构造函数的this指向obj，这样obj就可以访问到构造函数的属性
    console.log(res)
    return typeof res === 'object' ? res : obj
}

function people(name,age){
    this.name = name
    this.age = age
} 

let obj1 = new people('obj1',15)

let obj2 = _New(people,'obj2',18)

console.log(obj1,obj2)