<template>
  <div id="history">
    <div class="row">
      <div class="card col-4" style="width: 18rem;" v-for="(item,index) in items" :key="index">
        <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text text-success">{{item.text}}</p>   
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// ①图片需要用import引入然后在data内配置相关数据
//②用imgsrc require引入
export default {
  name: 'History',
  data(){
    return{
      items:[{
        imgsrc:require("../../assets/pizza1.jpg"),
        title:"芝士pizza",
        text:'支付已完成'
      },{
        imgsrc:require("../../assets/pizza2.jpg"),
        title:"水果pizza",
        text:'支付已完成'
      },{
        imgsrc:require("../../assets/pizza3.jpg"),
        title:"榴莲pizza",
        text:'支付已完成'
      }]
    }
  }
  
  
}
</script>

<style>

</style>
