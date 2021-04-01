<template>
  <div class="wrapper" ref="wrapper">
    <div class="countent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
  data(){
    return {
      scroll: null
    }
  },
  props:{
    probeType:{
      type: Number,
      default(){
        return 0
      }
    }
  },
  mounted(){
    this.scroll = new Scroll(this.$refs.wrapper,{
      click: true,
      probeType:this.probeType
    }),
    //监听滚动，并通过自定义事件将position传到home组件
    this.scroll.on('scroll',(positon) => {
      this.$emit('scroll',positon)
    })
  },
  methods:{
    scrollto(x,y,time = 400){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>