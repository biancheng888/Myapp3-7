<template>
  <div id="login" class="container row">
    <form class="login col-4">
    <div class="form-group ">
    邮箱:
    <input type="email" class="form-control"  placeholder="请输入邮箱" v-model="username" id="input1">
    </div>
    <div class="form-group">
    密码:
    <input type="password" class="form-control" placeholder="请输入密码" v-model="password" id="input2">
    </div>
    <div class="checkbox">
    <label>
      <input type="checkbox"> 记住账号和密码
    </label>
    </div>
    <button type="submit" @click.prevent="resubmit" class="btn btn-success btn-block">登录</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    resubmit(){
      axios.get("./message.json").then((res)=>{
        console.log(res.data)

        var result=[]

        for(var key in res.data){
          var user=res.data[key]

          result.push(user)
        }
        // console.log(res.data)
        console.log(result)
        var truemg=result.filter((user)=>{
          return user.username===this.username && user.password===this.password
        })
        if(truemg!=null&&truemg.length>0){
          alert("登录成功")
          this.$router.push("/admin")

        }else{
          alert("账号或密码错误")
        }
      })
    }
  }
  
}
</script>

<style>
  #login{
    width: 100%;
    height: 100%;
    /* background: url("../../static/热门活动.jpg") no-repeat center; */
    background-size:cover; 
  }
  .login{
    margin: 5% auto
  }
</style>
