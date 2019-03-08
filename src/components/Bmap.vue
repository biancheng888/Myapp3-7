<template>
    <div id="bmap">
       <div id="allmap" ref="allmap"></div>
    </div>
</template>
<script>
export default {
    name:"Bmap",
     methods:{
    map(){
      let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);// 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.MapTypeControl({//添加地图类型控件
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
 
  },
  mounted(){
    this.map()
 
  }
}
</script>

<style scoped>
    #allmap{
        width: 100%;
        height: 800px
    }
    /* .anchorBL {
     display: none;
    } */
</style>


