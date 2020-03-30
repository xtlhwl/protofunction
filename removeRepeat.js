// 去重
// 大概思路是，先遍历循环数组，每个遍历中的val放入新数组的indexOf检查，检查新数组中是否包含这个值，不包含着存入新数组中

// Array.from()、filter()、for()等方法都可以完成上面数组去重。new Set()
function removeRepeat(arr){
    let newArr= []
    arr.forEach(val => {
        if(newArr.indexOf(val) == '-1'){
            newArr.push(val)
        }
    })
    return newArr
}

let value = removeRepeat([1,2,1,2,34,5,6,7])

console.log(value)