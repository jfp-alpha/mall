<template>
  <div>
    <div class="bottom-bar">

      <div class="select-all">
        <check-buttom :ischecked="selectall" @click.native="selectclick"></check-buttom>
        <span class="text">全选</span>
      </div>

      <div class="total">
        <div>合计：￥ {{ totalprice }} </div>
      </div>

      <div class="compute">
        <div @click="toast">去计算（ {{ getlength }} ）</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from './CheckButton'
import { mapGetters } from 'vuex'
export default {
  components:{
    CheckButtom
  },
  computed:{
    ...mapGetters(['getInfo']),
    totalprice(){
      return this.getInfo.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    getlength(){
      return this.getInfo.filter(item => {
        return item.checked
      }).length
    },

    selectall(){
      if(!this.getInfo.length){
        return false
      }
      return !(this.getInfo.find(item => !item.checked))
    }
  },
  methods:{
    selectclick(){
      if(this.selectall){
        this.getInfo.forEach(item => item.checked = false)
      }else{
        this.getInfo.forEach(item => item.checked = true)
      }
    },
    toast(){
      if(!this.selectall){
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    display: flex;
    width: 100%;
    font-size: 14px;
  }
  .select-all{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18%;
    margin-left: 5px;
  }
  .text{
    margin-left: 7px;
  }
  .total{
    flex: 1;
    padding-left: 10%;
    line-height: 40px;
  }
  .compute{
    width: 25%;
    background-color: blue;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>