<!--
 * @Author: liming
 * @Date: 2021-09-09 00:40:42
 * @LastEditTime: 2021-09-09 08:31:14
 * @FilePath: \04-简历项目部署阿里云服务器\01-项目部署实战\02-代码手敲\vue_font\src\App.vue
-->
<template>
   <ul>
       <li v-for='user in users' :key='user.id'>{{user.name}}</li>
   </ul>
</template>

<script>

import axios from "axios"
export default {
  name: 'App',
  data(){
      return {
          users:[]
      }
  },
  mounted() {
    //   axios.get('http://localhost:3000/api/users').then(response=>{
      axios.get('http://lm2048.top:3000/api/users').then(response=>{
          this.users = response.data
      })
  }
}
</script>

<style>

</style>
