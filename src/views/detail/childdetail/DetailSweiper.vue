<template>
  <div>
    <swiper  class="topimage">
      <swiper-item v-for="item in topImage">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  data(){
    return {
      
    }
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods:{

  }
}
</script>

<style scoped>
  .topimage{
    height: 300px;
    overflow: hidden;
  }
</style>