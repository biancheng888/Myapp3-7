<template>
    <div id="contact">
      <div class="card">
      <div class="card-header">
        联系我们
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">欢迎来到我的pizza</p>
        <router-link to="/contact/address"  class="btn btn-primary">地址信息</router-link>
        <router-link to="/contact/person"  class="btn btn-primary">法人代表</router-link>
        <router-link to="/contact/tel"  class="btn btn-primary">联系电话</router-link> 
      </div>  
       <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  
}
</script>

<style>

</style>
