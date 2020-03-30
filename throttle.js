// 节流函数

function throttle(fn, delay =500){
    let flag = true
    return (...args) => {
        if(!flag) return //如果flag 为false 跳出
        flag = false
        setTimeout(() => {
            fn.apply(this,args)
            flag = true
        },delay)
    }
}