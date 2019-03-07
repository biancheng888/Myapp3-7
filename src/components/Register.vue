<template>
  <div id="register" class="container row">
    <form class="register col-4">
    <div class="form-group ">
    邮箱:
    <input type="email" class="form-control"  placeholder="请输入邮箱" v-model="username">
    </div>
    <div class="form-group">
    密码:
    <input type="password" class="form-control" placeholder="请输入密码" v-model="password">
    </div>
    <div class="form-group">
    确认密码:
    <input type="password" class="form-control" placeholder="请再次输入密码" v-model="repassword">
    </div>
    <div class="checkbox">
    <label>
      <input type="checkbox"> 记住账号和密码
    </label>
    </div>
    <button type="submit" @click.prevent="onsubmit" class="btn btn-success btn-block">注册</button>
    </form>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'Register',
  data(){
    return{
      username:'',
      password:'',
      repassword:''
    }
  },
  methods:{
    onsubmit(){

      // 确认用户密码是否正确,重复确认
      if(this.password==this.repassword){
        var formdata={
          username:this.username,
          password:this.password
        }
      axios.post("./message.json",formdata).then(res=>{
        console.log("数据抛出完成")
        
        this.$router.push("./login")
        
        // this.$router.replace("./login")
      })
      }
    }
  }
  
}
</script>

<style>
  /* #register{
    width: 100%;
    height: 100%;
    background: url("../../static/热门活动.jpg") no-repeat center;
    background-size:cover; 
  } */
  .register{
    margin: 5% auto
  }

</style>
