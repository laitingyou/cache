class Utils {

  constructor (option){
    this['setItem'] = option.setSyncFn || window.localStorage.setItem
    this['getItem'] = option.getSyncFn || window.localStorage.getItem
    this['removeItem'] = option.rmFnSync || window.localStorage.removeItem
  }

  parse(value){
    return JSON.parse(value)
  }

  stringify(value){
    return JSON.stringify(value)
  }

  getStorage(key){
    return this['getItem'](key)
  }

  setStorage(key, value){
    this['setItem'](key, this.stringify(value))
    return value
  }

  isExpire(key, expireTime){
    let currentTime = new Date()*1
    if(currentTime > expireTime){
      this['removeItem'](key)
      return true
    }
    return false
  }

}
export default Utils
