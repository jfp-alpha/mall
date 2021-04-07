<template>
    <div>
      <div class="icon-selector" :class="{checked:ischecked}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
    props:{
      ischecked:{
        type: Boolean,
        default(){
          return false
        }
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .checked {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
