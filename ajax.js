// 原生ajax

function ajax(options){
    let method = options.method || 'GET' //方法，不传则默认为GET方法
    let params = options.params //请求携带的参数
    let data = options.data
    let url = options.url+ (params ?  Object.keys(params).map(key => key+'=' + params[key]).join('&') :'') // 拼接链接参数
    let async = options.async === false ? false : true
    let success = options.success
    let headers = options.headers

    let xhr

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status == 200){
            success && success(xhr.responseText);
        }
    }
    xhr.open(method,url,async)

    if(headers){
        Object.forEach(key => {
            xhr.setRequestHeader(key,headers[key])
        })
    }

    xhr.method === 'GET' ? xhr.send():xhr.send(data)
}