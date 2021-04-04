<template>
  <div>
    <swiper>
      <swiper-item v-for = "item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isimgload: false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgload(){
      if(!this.isimgload){
        this.$emit('swiperimgload')
        this.isimgload = true
      }
    }
  }
}
</script>