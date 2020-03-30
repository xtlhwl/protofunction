// 手写JSONP函数


function JSONP({url,params,cb}){
    return new Promise((resolve,reject) => {

        window[cb] = function(data){ // 声明全局变量
            resolve(data)
            document.body.removeChild(script)
        }
        params = {...params,cb}

        let arr = []
        for(let key of params){
            arr.push(`${key}=${params[key]}`)
        }

        let script = document.createElement('script')
        script.src= `${url}?${arr.join('&')}`
        document.body.appendChild(script)
    })
}

JSONP('http://ww.baidu.com',{params:11},function(){console.log(1)})