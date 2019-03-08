<template>
<div id="controlmenu">
    <h3 class="text-warning mt-5">菜单管理</h3>
    <table class="table">
      <thead class="bg-primary">
        <tr class="text-warning">
          <th>序号</th>  
          <th>种类</th>  
          <th>删除</th>    
        </tr>
      </thead>

      <tbody class="text-success" >
        <tr v-for="(pizza,index) in pizzas" :key="index">
          <td>
              {{index+1}}
          </td>
          <td>
            {{pizza.name}}
          </td>
          <td>
              <button class="btn btn-danger" @click="del(pizza)">
                  删除
              </button>
              </td>         
        </tr>
      </tbody>
    </table>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"Controlmenu",
    data(){
        return{
         pizzas:[]
        }
       
    },
    methods:{
        del(pizza){
            axios.delete('./newmenu/'+pizza.id+'.json').then(res=>{
                console.log("删除成功")
                location.reload()
            })
        }
    },
    mounted(){
        var that=this
        axios.get("./newmenu.json").then((res)=>{
            for(var key in res.data){
                console.log(key)
                var pizza=res.data[key]
                pizza.id=key
                that.pizzas.push(pizza)
               
            }
             console.log(that.pizza)
        })

         
    }
}
</script>
<style scoped>

</style>
