<template>
  <div>
    <nav-bar class="navbar"><div slot="center">购物车（{{ getlength }}）</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters  } from 'vuex'
export default {
  components:{
    NavBar
  },
  computed:{
    ...mapGetters(['getlength'])
  },
}
</script>

<style scoped>
  .navbar{
    background-color: rgb(255,129,152);
    color: #fff;
  }
</style>