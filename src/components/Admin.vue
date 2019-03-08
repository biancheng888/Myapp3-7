<template>
  <div id="admin" class="container">
    <div class="row">
      <div class="col-7">
        <AddPizza/>
      </div>
      <div class="col-5">
          <Controlmenu/>
      </div>
    </div>
  </div>
</template>

<script>
import AddPizza from "@/components/AddPizza"
import Controlmenu from "@/components/Controlmenu"
export default {
  name: 'Admin',
  data(){
    return{

    }
  },
  components:{
    "AddPizza":AddPizza,
    // AddPizza   或者只写一个
    Controlmenu
  }
  
}
</script>

<style>

</style>
