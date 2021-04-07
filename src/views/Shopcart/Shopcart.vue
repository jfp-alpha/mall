<template>
  <div class="shopcart">
    <nav-bar/>
    <scroll class="scroll" ref="scroll">
      <shop-list></shop-list>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from './childcomponents/NavBar'
import ShopList from './childcomponents/ShopList'
import Scroll from 'components/common/scroll/Scroll'
import BottomBar from './childcomponents/BottomBar'
import { mapGetters  } from 'vuex'

export default {
  components:{
    NavBar,
    ShopList,
    Scroll,
    BottomBar
  },
  computed:{
    ...mapGetters(['getlength','getInfo'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .shopcart{
    position: relative;
    height: 100vh;
  }
  .scroll{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>