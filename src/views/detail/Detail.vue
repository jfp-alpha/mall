<template>
  <div class="detail">
    <detail-nav-bar @navbarclick="navbarclick"></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :top-image = 'topimage'></detail-swiper>
      <detail-goods-info :goods="goodsinfo"></detail-goods-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-image-info :detailInfo="imageInfo" @imageload="imageload"></detail-image-info>
      <detail-item-params :detailparams="detailParams" ref="params"></detail-item-params>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>

  </div>
</template>

<script>
import DetailNavBar from './childdetail/DetailNavBar'
import DetailSwiper from './childdetail/DetailSweiper'
import DetailGoodsInfo from './childdetail/DetailGoodsInfo'
import DetailShopInfo from './childdetail/DetailshopInfo'
import DetailImageInfo from './childdetail/DetailImageInfo'
import DetailItemParams from './childdetail/DetailItemParams'
import DetailCommentInfo from './childdetail/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/context/goods/goodList'

import {getDetailIid,Goods,getCommend} from 'network/detail.js'
import {scrollRefresh} from 'common/mixin'
import {debound} from 'common/utils'

export default {
  //keep-alive可以根据name的值Detail排除在外
  name:'Detail',
  components:{
    DetailSwiper,
    DetailNavBar,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailItemParams,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  data(){
    return {
      iid: null,
      topimage:[],
      goodsinfo: {},
      shopInfo: {},
      imageInfo: {},
      detailParams: {},
      commentInfo: {},
      recommend: [],
      offsettop: [],
      gettopY: null
    }
  },
  mixins: [scrollRefresh],
  mounted(){
  },
  destroyed(){
    this.$bus.$off('iload',this.scrollrefresh)
  },
  created(){
    //保存传入的iid
    this.iid = this.$route.params.iid

    //根据iid请求详细数据
    getDetailIid(this.iid).then(res => {
      const data = res.result
      this.topimage = data.itemInfo.topImages

      this.goodsinfo = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      this.shopInfo = data.shopInfo
      this.imageInfo = data.detailInfo
      this.detailParams = data.itemParams
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
    getCommend().then(res => {
      this.recommend = res.data.list
    })

    this.gettopY = debound(() => {
      this.offsettop = []
      this.offsettop.push(0)
      this.offsettop.push(this.$refs.params.$el.offsetTop)
      this.offsettop.push(this.$refs.comment.$el.offsetTop)
      this.offsettop.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.offsettop)
    },300)
  },
  methods:{
    imageload(){
      this.refresh()
      this.gettopY()
    },
    navbarclick(index){
      this.$refs.scroll.scrollto(0,-this.offsettop[index])
    }
  }
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  .scroll{
    height: calc(100% - 44px);
    overflow: hidden;
    background-color: white
  }
</style>