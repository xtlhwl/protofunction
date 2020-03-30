Array.myIsArray = function(o){

    return Object.prototype.toString.call(Object(o)) == "[object Array]"
}

let arrTest = [1,2,3,4]
let arrTest2 = { 1:1 }

let a = Array.myIsArray(arrTest)
let b = Array.myIsArray(arrTest2)
console.log(a,b)