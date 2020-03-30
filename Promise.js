class vPromise {
    constructor(executor){
        //状态
        this.state = 'padding'
        //成功返回的值
        this.value = undefined
        //失败返回的error
        this.reason = undefined

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []


        let resolve = value => {
            if(this.state === 'padding'){
                this.state = 'fulfilled'
                this.value = value

                // 一旦resolve执行后，立马调用then存储的执行函数
                this.onFulfilledCallbacks.forEach((fn) => {
                    fn()
                })
            }
        }

        let reject = reason => {
            if(this.state === 'padding'){
                this.state = 'rejected'
                this.reason = reason

                // 一旦reason执行后，立马调用then存储的执行函数
                this.onRejectedCallbacks.forEach((fn) => {
                    fn()
                })
            }
        }
        // 如果executor执行报错，就直接执行reject
        try {
            executor(resolve,reject) //函数形参
        } catch (error) {
            reject(reject)
        }
    }
    //then函数
    then(onFulfilled,onRejected) {
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }
        // 如果resolve 在setTimeout当中，还未执行，直接调用了then，就需要将成功和失败存储到数组当中
        if(this.state === 'padding'){
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value)
            })

            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })

        }
    }
}