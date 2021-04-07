<template>
  <div>
    <div class="box">
      <div class="bar-item-left">
        <div class="child">
          <div class="service"></div>
          <span class="text">客服</span>
        </div>
        <div class="child">
          <div class="shop"></div>
          <span class="text">店铺</span>
        </div>
        <div class="child">
          <div class="collect"></div>
          <span class="text">收藏</span>
        </div>
      </div>

      <div class="bar-item-right">
        <span class="shopcart" @click="addToCart">加入购物车</span>
        <span class="purchase">购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .box{
    height: 49px;
    display: flex;
    background-color: #fff;
  }
  .bar-item-left{
    flex: 1;
    display: flex;
    text-align: center;
    overflow: hidden;
  }
  .bar-item-left .child{
    flex: 1;
  }
  .bar-item-left .child div{
    width: 25px;
    height: 25px;
    margin: 3px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png")0 0/100%;
  }
  .bar-item-left .child .service {
    background-position:0 -60px;
  }

  .bar-item-left .child .shop {
    background-position:0 -112px;
  }
  .bar-item-left .text{
    font-size: 13px;
  }
  .bar-item-right{
    flex: 1;
    display: flex;
  }
  .bar-item-right span{
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
  .bar-item-right .shopcart{
    background-color: rgb(255,223,16);
    color: #000;
    font-size: 16px;
  }
  .bar-item-right .purchase{
    background-color: rgb(252,119,152);
    color: #fff;
  }
</style>