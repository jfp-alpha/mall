<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: '',
      isshow: false
    }
  },
  methods:{
    show(message = '',time = 1500){
      this.message = message
      this.isshow = true
      setTimeout(() => {
        this.message = ''
        this.isshow = false
      }, time);
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    padding: 5px 10px;
    transform: translate(-50%,-50%)
  }
</style>