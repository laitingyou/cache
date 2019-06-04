class Utils {
  parse(value){
    return JSON.parse(value)
  }

  stringify(value){
    return JSON.stringify(value)
  }

  getStorage(key){
    return window.localStorage.getItem(key)
  }

  setStorage(key, value){
    window.localStorage.setItem(key, this.stringify(value))
    return value
  }

  isExpire(key, expireTime){
    let currentTime = new Date()*1
    if(currentTime > expireTime){
      window.localStorage.removeItem(key)
      return true
    }
    return false
  }

}
export default Utils
