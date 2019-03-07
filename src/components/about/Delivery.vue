<template>
  <div id="delivery">
  
    <div class="row">
      <div class="card col-4" style="width: 18rem;" v-for="(item,index) in items" :key="index">
        <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.text}}</p>
          <a href="#" class="btn btn-primary">快递查询</a>
        </div>
      </div>
    </div>
   
  </div>
 
</template>

<script>

export default {
  name: 'Delivery',
   data(){
    return{
      items:[{
         imgsrc:require("../../assets/del-sf.png"),
        title:"顺丰",
        text:'三八女王节，有机会抽中免单'
      },{
         imgsrc:require("../../assets/del-yt.jpg"),
        title:"圆通",
        text:'三八女王节，有机会抽中免单'
      },{
         imgsrc:require("../../assets/del-zt.jpg"),
        title:"中通",
        text:'三八女王节，有机会抽中免单'
      }]
    }
  }
}
</script>

<style>

</style>
