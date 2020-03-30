// 快速排序

// 找到一个基准数，比基准数大的放在右边，比基准数小的放左边

function quickSort(arr){

    if(arr.length <= 1){
        return arr
    }
    let middleLength = Math.floor(arr.length / 2) // 取得数组中间长度
    let middleValue = arr.splice(middleLength,1)[0]  // 截取中间值
    let left = []
    let right = []

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] >= middleValue){
            right.push(arr[index])
        }else{
            left.push(arr[index])
        }
    }
    return quickSort(left).concat([middleValue],quickSort(right))


}

var a = quickSort([1,2,3,3,4,1,6,4,8,4,23,55,23])

console.log(a)
