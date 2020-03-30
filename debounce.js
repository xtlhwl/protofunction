// 防抖函数 短时间内多次点击，等点击结束，只发送一次

function debounce(fn,delay){
    let timer = null
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=> {
            fn().apply(this.args)
        },delay)
    }
}

