import {cache} from 'ltycache'
const cache = new cache({})
// 异步
cache.setItem('name', 'laitingyou', 2000).then(res=>{
  console.log(res)
}).catch(e=>{})
cache.getItem('name').then(res=>{
  console.log(res)
}).catch(e=>{})
//同步
let res1 = cache.syncSetItem('name', 'laitingyou', 2000)
console.log(res1)

let res2 = cache.syncGetItem('name')
console.log(res2)






