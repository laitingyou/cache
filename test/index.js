import webCache from 'cache'
const cache = new webCache()
// 异步
cache.setItem('name', 'laitingyou', 2000).then(res=>{
  console.log(res)
}).catch(e=>{})
cache.getItem('name').then(res=>{
  console.log(res)
}).catch(e=>{})
//同步
let res1 = cache.asyncSetItem('name', 'laitingyou', 2000)
console.log(res1)

let res2 = cache.asyncGetItem('name')
console.log(res2)






