# A browser cache based on local storage.

## Why?
Because the browser cookie capacity is too small to meet the large file storage, localstorage has no expiration time. So ltycache is a memory that can store large files and set expiration time.

## Installation
```
npm i -D ltycache
```
## Usage 
```
import {cache} from 'ltycache'
const cache = new cache()

// async
cache.setItem('name', 'laitingyou', 2000).then(res=>{
  console.log(res)
}).catch(e=>{})

cache.getItem('name').then(res=>{
  console.log(res)
}).catch(e=>{})

// aync
let res1 = cache.syncSetItem('name', 'Mr Lai', 2000)

const name = cache.syncGetItem('name')
console.log(name) // result: Mr Lai

setTimeout(_ => {
    const name = cache.syncGetItem('name')
    console.log(name) // result: null
}, 3000)

```

## API

### setItem(key, value, ms)
异步设置缓存

### getItem(key)
异步获取缓存

### syncSetItem(key, value, ms)
同步设置缓存

### syncGetItem(key)
同步获取缓存
