<template>
  <div class="home">
   <div class="box">
      <div class="bg">
        <h1>欢迎来品尝pizza!</h1>
        <h2>这里有各种各样好吃的pizza.</h2>
        <button @click="goMenu" class="btn btn-primary btn1">Let's Order.</button> 
      </div>      
    </div>
    <h3>快递信息</h3>
   
    <h3>历史订单</h3>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    goMenu(){
      this.$router.push("./Menu")
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    width:100%;
    height: 800px;
     background: url("../assets/pizza.jpg");
     padding: 15%;
  };
  .bg{
  background: #bbb;
  opacity: .8;
  width: 600px;
  height: 200px;
  margin: 150px auto;
  padding: 20px;
  position: relative;

  }
 

</style>
