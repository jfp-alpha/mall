<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/context/mainTabBar/MainTabBar'
export default {
  components:{
    MainTabBar
  }
}
</script>

<style scoped>
  @import 'assets/css/base.css';
</style>
