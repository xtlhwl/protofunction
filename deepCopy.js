// 深拷贝
function deepCopy(value){
    const type = getType(value)

    let Copy

    switch (type) {
        case "Array":
            return copyArray(value,type,Copy);
        case "Object":
            return copyObject(value,type,Copy);
        case "Function":
            return copyFunction(value,type,Copy);
        default:
            return value;
    }
}

function getType(value){
    let KType =  Object.prototype.toString.call(value).slice(8).split(']')[0]
    return KType
}

function copyArray(Value,type,copy=[]){
    for (const [index,value] of Value.entries()) {
        copy[index] = deepCopy(value)
    }
    return copy
}

function copyObject(Value,type,copy={}){
    for (const [index,value] of Object.entries(Value)) {
        copy[index] = deepCopy(value)
    }
    return copy
}

function copyFunction(Value,type,Copy = () => {}){
    const fun = eval(Value.toString())  //函数字符串化后，输入eval环境运行，然后再将value函数原型 == fun函数原型
    fun.prototype = Value.prototype
    return fun
}

let arr1 = [1,2,3,4,5]
let arr2 = deepCopy(arr1)
let arr3 = arr1
arr1[0] = 0

console.log(arr1,arr2,arr3)
