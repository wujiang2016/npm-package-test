## 使用说明
####这是一个自己发布npm包以及自己调用的小测试
------
安装
```javascript
npm install wujiang-test --save
```
------
main.js
```javascript
import wt from 'wujiang-test'

for(var key in wt){
	Vue.use(wt[key])
}
```
##### 调用
```javascript
<template>
  <div>
    <Msg :data="myData"></Msg>
    <Msg2 :data="myData"></Msg2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){  
      return {  
          myData: {  
              name: '天天' 
          }  
      }  
  },
  methods: {
    getCode(code) {
        console.log(code)
    }
  }
}
</script>
```