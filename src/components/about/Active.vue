<template>
  <div id="active">
   <div class="card col-12" v-for="(item,index) in items" :key="index">
    <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Active',
  data(){
    return{
      items:[{
         imgsrc:require("../../assets/pizza3.jpg"),
        title:"活动一",
        text:'三八女王节，有机会抽中免单'
      },{
        imgsrc:require("../../assets/pizza1.jpg"),
        title:"活动二",
        text:'三八女王节，有机会抽中免单'
      },
      {
        imgsrc:require("../../assets/pizza2.jpg"),
        title:"活动三",
        text:'三八女王节，有机会抽中免单'
      }]
    }
  }
  
}
</script>

<style>

</style>
