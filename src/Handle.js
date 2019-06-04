import Utils from './Utils'
import config from '@/cache.config'
class Handle extends Utils{

  constructor (){
    super()
    let webcache_timesheet = this.getStorage(config.cache_name)
    this.timeSheet = this.parse(webcache_timesheet) || {}
  }

  getTime(key){
    return this.timeSheet[key]
  }

  setTime(key, ms){
    let {expire_default} = config
    if(1*expire_default){
      if(!ms && ms !== 0) throw 'Missing parameters'
      let currentTime = new Date()*1
      this.timeSheet[key] = currentTime + ms
      this.setStorage(config.cache_name, this.timeSheet)
    }
  }

  removeTime(key) {
    let cur = this.timeSheet[key]
    if(cur){
      let res = this.isExpire(key, cur)
      if(res){
        delete this.timeSheet[ key ]
        this.setStorage(config.cache_name, this.timeSheet)
        return this.timeSheet
      }
    }
    return null
  }

}

export default Handle
