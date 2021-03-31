<template>
  <div id="recommend">
    <div v-for = "item in recommend" class = "recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  #recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 5px 0 10px;
    border-bottom: 6px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
  }
</style>