const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
}

class MyPromise {
  #thencallbacks = []
  #catchcallbacks = []
  #state = STATE.PENDING
  #value
  #onSuccessBind = this.#onSuccess.bind(this)
  #onFailBind = this.#onFail.bind(this)

/* 
to create a promise, we do new Promise(() => {}) so we can see it takes a callback
the callback takes two arguments, resolve and reject
the callback is executed immediately, so we can use it to set the state of the promise, one for success and one for failure


*/

  constructor(callback) {
    try {
      callback(this.#onSuccessBind, this.#onFailBind)
    } catch (e) {
      this.#onFail(e)
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thencallbacks.forEach(callback => {
        callback(this.#value)
      })

      this.#thencallbacks = []
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchcallbacks.forEach(callback => {
        callback(this.#value)
      })

      this.#catchcallbacks = []
    }
  }


  // #onSuccess is called when the promise is resolved
  // implement them as private methids because they are not used outside the class
  #onSuccess(value) {
    queueMicrotask(() => {
      // the following ensures that the promise is not already resolved or rejected
      // if it is, we do nothing
      // this is important because the promise can be resolved or rejected multiple times
      // and we only want to run the callbacks once
      if (this.#state !== STATE.PENDING) return

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind)
        return
      }

      this.#value = value
      this.#state = STATE.FULFILLED
      this.#runCallbacks()
    })
  }

  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind)
        return
      }

      if (this.#catchcallbacks.length === 0) {
        throw new UncaughtPromiseError(value)
      }

      this.#value = value
      this.#state = STATE.REJECTED
      this.#runCallbacks()
    })
  }

  then(thencallback, catchcallback) {
    return new MyPromise((resolve, reject) => {
      this.#thencallbacks.push(result => {
        if (thencallback == null) {
          resolve(result)
          return
        }

        try {
          resolve(thencallback(result))
        } catch (error) {
          reject(error)
        }
      })

      this.#catchcallbacks.push(result => {
        if (catchcallback == null) {
          reject(result)
          return
        }

        try {
          resolve(catchcallback(result))
        } catch (error) {
          reject(error)
        }
      })

      this.#runCallbacks()
    })
  }

  catch(callback) {
    return this.then(undefined, callback)
  }

  finally(callback) {
    return this.then(
      result => {
        callback()
        return result
      },
      result => {
        callback()
        throw result
      }
    )
  }

  static resolve(value) {
    return new Promise(resolve => {
      resolve(value)
    })
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value)
    })
  }

  static all(promises) {
    const results = []
    let completedPromises = 0
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i]
        promise
          .then(value => {
            completedPromises++
            results[i] = value
            if (completedPromises === promises.length) {
              resolve(results)
            }
          })
          .catch(reject)
      }
    })
  }

  static allSettled(promises) {
    const results = []
    let completedPromises = 0
    return new MyPromise(resolve => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i]
        promise
          .then(value => {
            results[i] = { status: STATE.FULFILLED, value }
          })
          .catch(reason => {
            results[i] = { status: STATE.REJECTED, reason }
          })
          .finally(() => {
            completedPromises++
            if (completedPromises === promises.length) {
              resolve(results)
            }
          })
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }

  static any(promises) {
    const errors = []
    let rejectedPromises = 0
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i]
        promise.then(resolve).catch(value => {
          rejectedPromises++
          errors[i] = value
          if (rejectedPromises === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"))
          }
        })
      }
    })
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error)

    this.stack = `(in promise) ${error.stack}`
  }
}

export default MyPromise
