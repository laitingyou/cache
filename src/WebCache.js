<<<<<<< HEAD
import Handle from './Handle'
class WebCache extends Handle{

  constructor (){
    super()
  }

  /**
   * 异步设置缓存
   * @param key
   * @param value
   * @param ms
   * @returns {Promise<void>}
   */
  async setItem(key, value, ms){
    return this.asyncSetItem(key, value, ms)
  }

  /**
   * 同步设置缓存
   * @param param
   * @returns {Promise<boolean>}
   */
  asyncSetItem(key, value, ms){
    try {
      if(arguments.length < 2) throw 'Missing parameters'
      this.setTime(key, ms)
      return this.setStorage(key, value)
    }catch (e) {
      console.error(e)
    }
  }

  /**
   * 清除某个缓存
   * @param key
   */
  removeItem(key){
    return window.localStorage.removeItem(key)
  }

  /**
   * 清除缓存
   */
  clearStorage(){
    return window.localStorage.clear()
  }

  /**
   * 异步获取缓存
   * @param key
   * @returns {Promise<*>}
   */
  async getItem(key){
    return this.asyncGetItem(key)
  }

  /**
   * 同步获取缓存
   * @param key
   * @returns {Promise<*>}
   */
  asyncGetItem(key){
    try {
      if(arguments.length < 1) throw 'Missing parameters'
      this.removeTime(key)
      return this.getStorage(key)
    }catch (e) {
      console.error(e)
    }
  }


}
export default WebCache
=======
import Handle from './Handle'
class WebCache extends Handle{

  constructor (){
    super()
  }

  /**
   * 异步设置缓存
   * @param key
   * @param value
   * @param ms
   * @returns {Promise<void>}
   */
  async setItem(key, value, ms){
    return this.asyncSetItem(key, value, ms)
  }

  /**
   * 同步设置缓存
   * @param param
   * @returns {Promise<boolean>}
   */
  asyncSetItem(key, value, ms){
    try {
      if(arguments.length < 2) throw 'Missing parameters'
      this.setTime(key, ms)
      return this.setStorage(key, value)
    }catch (e) {
      console.error(e)
    }
  }

  /**
   * 清除某个缓存
   * @param key
   */
  removeItem(key){
    return window.localStorage.removeItem(key)
  }

  /**
   * 清除缓存
   */
  clearStorage(){
    return window.localStorage.clear()
  }

  /**
   * 异步获取缓存
   * @param key
   * @returns {Promise<*>}
   */
  async getItem(key){
    return this.asyncGetItem(key)
  }

  /**
   * 同步获取缓存
   * @param key
   * @returns {Promise<*>}
   */
  asyncGetItem(key){
    try {
      if(arguments.length < 1) throw 'Missing parameters'
      this.removeTime(key)
      return this.getStorage(key)
    }catch (e) {
      console.error(e)
    }
  }


}
export default WebCache
>>>>>>> 6bfe6053d1ab5e3c4ccfd3d76811a2a19d95351d
