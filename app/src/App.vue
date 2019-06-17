<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import request from '../src/utils/require.js'
export default {
  
    created(){
        request.get('/api/user/info')   
    },
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html,body{
  width: 100%;
  height: 100%;
  
}
#app{
  width: 100%;
  
}
</style>
