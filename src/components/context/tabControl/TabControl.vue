<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" @click="control(index)" :class="{active:index === currentindex}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentindex : 0
    }
  },
  methods: {
    control(index){
      this.currentindex = index;
      this.$emit('btnclick',index)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    /* height: 40px; */
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: solid 3px var(--color-high-text);
    padding-bottom: 4px;
  }
</style>