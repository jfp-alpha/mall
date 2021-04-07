<template>
  <div>
    <div class="shoplist">
      
      <div class="item-selector">
      <check-button :ischecked="listItem.checked" @click.native="checked"></check-button>
      </div>

      <div class="item-left"><img :src="listItem.image" alt=""></div>
      <div class="item-right">
        <div class="span-top">{{ listItem.title }}</div>
        <div class="span-bottom">{{ listItem.desc }}</div>

        <div class="info-bottom">
        <div class="item-price left">¥{{listItem.price}}</div>
        <div class="item-count right">x{{listItem.count}}</div>
        </div>

      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  props:{
    listItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checked(){
      this.listItem.checked = !this.listItem.checked
    }
  }
}
</script>

<style scoped>
  .shoplist{
    display: flex;
    width: 100%;
    border-bottom: 3px solid rgb(231,231,231);
  }
  .shoplist .item-left{
    height: 130px;
    margin: 10px 7px;
  }
  .shoplist .item-right{
    margin-top: 10px;
    overflow: hidden;
  }
  .shoplist .item-right div{
    height: 35x;
    line-height: 35px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .span-top{
    font-size: 20px;
  }
  .span-bottom{
    font-size: 15px;
  }
  .shoplist .item-left img{
    height: 100%;
    border-radius: 7%;
  }


  .info-bottom {
    margin-top: 35px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 0 10px 0 0;
  }
  .info-bottom .item-price {
    color: orangered;
  }
  .item-selector {
    padding-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>