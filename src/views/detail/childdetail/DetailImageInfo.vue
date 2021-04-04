<template>
  <div>
    <div v-for="detailimage in detailInfo.detailImage">
      <div class="info-top">
        {{ detailimage.key }}
      </div>
      <div>
        <img :src="item" alt="" @load="imageload" class="image" v-for="item in detailimage.list">
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    props: {
      detailInfo: {
        type: Object
      }
    },
    methods:{
      imageload(){
        this.$emit('imageload')
      }
    }
	}
</script>

<style scoped>
  .info-top{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    border-bottom: solid 4px rgba(242,245,248);
  }
  .image{
    width: 100%;

  }
</style>
