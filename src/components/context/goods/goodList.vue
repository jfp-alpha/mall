<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goods" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsListItem from './goodListItem'
export default {
  components:{
    GoodsListItem
  },
  props:{
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goodslist{
    display: flex;
    flex-wrap: wrap;/* 超出部分换行处理 */
    justify-content: space-around;
  }
</style>