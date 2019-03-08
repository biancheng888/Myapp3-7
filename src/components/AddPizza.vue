<template>
<div class="addpizza">

    <h3 class="text-danger mt-5">添加新pizza</h3>
    <form class="form"> 
        <p> pizza名称:</p>    
        <input type="email" placeholder="pizza名称" v-model="addpizza.name">
        <br><br>
        <p>商品描述:</p>
        <textarea  placeholder="请输入商品的相关描述..." cols="60" rows="2" v-model="addpizza.describe" ></textarea> 
         <br><br>
    
        <h4>尺寸&价格</h4>
        <form class="form-inline">
           尺寸：
            <select class="form-control mb-2 mr-sm-2" v-model="addpizza.size1">
                <option selected>5</option>
                <option >7</option>
                <option >9</option>
            </select>
            价格：
          <input type="text" class="form-control mb-2 mr-sm-2"  v-model="addpizza.price1">
        </form>
        <form class="form-inline">
           尺寸：
           <select class="form-control mb-2 mr-sm-2" v-model="addpizza.size2">
                <option selected>5</option>       
                <option >7</option>
                <option >9</option>
            </select>
            价格：
           <input type="text" class="form-control mb-2 mr-sm-2" v-model="addpizza.price2">
        </form>
        <button class="btn btn-success " @click.prevent="add">添加</button>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'AddPizza',
  data(){
      return{
          addpizza:{}
      }
  },
  methods:{
      add(){
           var data={
          name:this.addpizza.name,
          describe:this.addpizza.describe,
          options:[
            {size:this.addpizza.size1,price:this.addpizza.price1},
            {size:this.addpizza.size2,price:this.addpizza.price2}
            ]
            }
            axios.post("./newmenu.json",data).then((res)=>{
                console.log(res.data)
                this.$router.push('/menu') 
            })
         },
    }
}
</script>

<style>
   .form{
       text-align: left
   }
   .sel{
       width: 50px;
       height: 30px;
   }
</style>
