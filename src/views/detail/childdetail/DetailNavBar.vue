<template>
  <div>
    <nav-bar>
      <img src="~assets/img/common/back.svg" alt="" slot="left" class="back" @click="back">
      <div class="title"  slot="center">
        <div v-for="(item,index) in titles" 
             class="title-item" 
             :class="{ active:index == currentIndex }"
             @click="itemclick(index)">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components:{
    NavBar
  },
  methods:{
    back(){
      this.$router.back()
    },
    itemclick(index){
      this.currentIndex = index
      this.$emit('navbarclick',index)
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .back{
    margin-top: 11px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>