<template>
  <div id="menu" class="container">
    <div  class="row">
     <!-- 点餐 -->
     <div class="col-7">
       <h3 class="text-warning">点餐</h3>
       <table class="table">
      <thead class="bg-primary">
        <tr class="text-warning">
          <th>pizza尺寸</th>  
          <th>pizza价格</th>  
          <th>加入</th>    
        </tr>
      </thead>
      <tbody class="text-success" v-for="(item,index) in pizza"  :key="index">
        <tr>
          <td colspan="3">{{item.name}}</td> 
        </tr>
         <tr>
          <td colspan="3">{{item.describe}}</td> 
        </tr>
        <tr v-for="(item1,index1) in item.options"  :key="index1">
          <td>{{item1.size}}</td>
          <td>{{item1.price}}</td>
          <td>
            <button class="btn btn-success" @click.prevent="addshop(item,item1)">+</button>
          </td>         
        </tr>
      </tbody>
    </table>
    </div>
    <!-- 购物车 -->
    <div class="col-5">
       <h3 class="text-warning">购物车</h3>
       <table class="table">
      <thead class="bg-primary">
        <tr class="text-warning">
          <th>数量</th>  
          <th>种类</th>  
          <th>价格</th>    
        </tr>
      </thead>
      <template v-if="newpizza.length>0">
      <tbody class="text-success" >
        <tr v-for="(item,index) in newpizza" :key="index">
          <td>
            <button class="btn btn-success" @click="reduce(item,index)">-</button>
            <input type="number" id="input" v-model="item.count">
            <button class="btn btn-success" @click="add(item)">+</button>
          </td>
          <td>{{item.name}}-{{item.size}}</td>
          <td>{{item.price*item.count}}</td>         
        </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>商品件数：{{totalCount}}</td>
        <td>商品总价：{{totalPrice}}</td>
      </tr>
    </tfoot>
    </template>
    <template v-else>
      <tr>
        <td colspan="3" class="text-danger"><h3>购物车空空的，快来添加^~^</h3></td>
      </tr> 
    </template>
    </table>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Menu',
  data(){
    return{
      pizza:[
        {
          name:"榴莲披萨",
          describe:"口味独特，深受广大消费者喜爱！",
          options:[
            {size:"8寸",price:100},{size:"10寸",price:120}
          ]
        },
        {
          name:"芝士披萨",
          describe:"口味鲜美，深受广大消费者喜爱！",
          options:[
            {size:"6寸",price:100},{size:"10寸",price:120}
          ]
        }
      ],
      newpizza:[]
    }
  },
  computed:{
    totalPrice(){
      return this.newpizza.reduce((pre,cur)=>{
        return pre+cur.price*cur.count
      },0)
    },
    totalCount(){
      return this.newpizza.length
    }
  },
  methods:{
    addshop(item,options){
        var res=this.newpizza.filter((item2)=>{
          return item.name==item2.name&&options.size==item2.size
        })
       if(res!=null && res.length>0){
         console.log(res)
         res[0].count++
       }else{
         this.newpizza.push(
        {
          name:item.name,
          size:options.size,
        count:1,
        price:options.price
        })
      }
      
    },
    reduce(item,index){
      if(item.count>1){
        item.count-- 
      }else{
         this.newpizza.splice(index,1)
      }
     
    },
    add(item){
     
      item.count++
    }
  }
  
}
</script>

<style>
#input{
  width: 40px;
  height: 37px;
  text-align: center
}

</style>
