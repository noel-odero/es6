import { resolve } from "./webdev-promises/MyPromise"

class MyPromise {
    #onSuccess = () => {};
    #onFail = () => {};

    constructor(cb){
        try {
            cb(this.#onSuccess, this.#onFail)
        } catch(e){
            this.#onFail(e)
        }
    }
    #onSuccess(value){

    }

    #onFail(value){

    }

}


export default MyPromise

const p = new Promise(cb)

p.then(() => {

}).catch(() => {
    
})