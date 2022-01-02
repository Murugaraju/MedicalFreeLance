<template>
   <div>

      
        <Navbar/>
               
        <router-view class="body" ></router-view>
               
    </div>
   
</template>

<script>

import Navbar from '../navBar/Navbar';
export default {
    name:'Main',
    components:{
        Navbar
       
    }
}
</script>

<style scoped>
    #content{
      padding:0px
    }
</style>