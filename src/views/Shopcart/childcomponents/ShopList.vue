<template>
  <div>
    <div v-for="item in getInfo">
      <shop-list-item :list-item="item"></shop-list-item>
    </div>
  </div>
</template>

<script>
import { mapGetters  } from 'vuex'
import ShopListItem from './ShopListItem'
export default {
  components:{
    ShopListItem
  },
  computed:{
    ...mapGetters(['getInfo'])
  },
}
</script>

<style scoped>

</style>