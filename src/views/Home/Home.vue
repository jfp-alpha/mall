<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control :title="['流行','新款','精选']" 
                    @btnclick = "btnclick"
                    ref="tabcontrol2"
                    :class="{ tabcontrol:istabcontrol }"
                    v-show="istabcontrol"></tab-control>
    <scroll class="countent" 
            ref="scroll" 
            :probe-type = '3' 
            @scroll="scrollposition" 
            :pull-up-load = 'true'
            @pullingUp = 'pullingup'>
      <home-swiper :banner = "banners" @swiperimgload = "swiperimgload"></home-swiper>
      <recommoned :recommend = "recommend"></recommoned>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" 
                    @btnclick = "btnclick"
                    ref="tabcontrol1"></tab-control>
      <list :goods="showGoods"></list>
    </scroll>
    <back-top @click.native="backtop" v-show="isshow"></back-top>

  </div>
</template>

<script>
import HomeSwiper from './childcomponents/HomeSwiper'
import Recommoned from './childcomponents/RecommonView'
import FeatureView from './childcomponents/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/context/tabControl/TabControl'
import List from 'components/context/goods/goodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/context/backtop/BackTop'

import {getHomeMultidata,getHomeData} from 'network/home'
import {scrollRefresh} from 'common/mixin'

export default {
  components: {
    HomeSwiper,
    Recommoned,
    FeatureView,
    NavBar,
    TabControl,
    List,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:1,list:[]},
        'new':{page:1,list:[]},
        'sell':{page:1,list:[]}
      },
      currentIndex: 'pop',
      isshow: false,
      offsetTop: 0,
      istabcontrol: false,
      scrollY: 0,
    }
  },
  mixins: [scrollRefresh],
  computed: {
    showGoods(){
      return this.goods[this.currentIndex].list
    }
  },
  created(){
    this.getHomeMultidata()

    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted(){

  },
  activated(){
    this.$refs.scroll.scrollto(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.scroll.y

    this.$bus.$off('iload',this.scrollrefresh)
  },
  methods:{
    btnclick(index){
      switch(index) {
        case 0:
          this.currentIndex = 'pop';
          break;
        case 1:
          this.currentIndex = 'new';
          break;
        case 2:
          this.currentIndex = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentindex = index
      this.$refs.tabcontrol2.currentindex = index
    },
    backtop(){
      this.$refs.scroll.scrollto(0,0)
    },
    scrollposition(position){
      this.isshow = -position.y > 1000
      this.istabcontrol = -position.y > this.offsetTop
    },
    pullingup(){
      this.getHomeData(this.currentIndex)
    },
    swiperimgload(){
      this.offsetTop = this.$refs.tabcontrol1.$el.offsetTop
    },


    //网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeData(type){
      const page = this.goods[type].page
      getHomeData(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp()
        
      })
    }
  }
}
</script>

<style scoped>
  #home{
    /* margin-top: 44px; */
    height: 100vh;
    position: relative
  }
  .home-bar {
    /* background-color: #ff8198; */
    background-color: var(--color-tint);
    color: #fff;

    /* 在使用浏览器原生滚动是，为了不让导航跟着一起滚动需要添加fixed */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9 */
  }


  .countent{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  /* .countent{
    height: calc(100% - 93px);
    overflow: hidden;
  } */

  .tabcontrol{
    position: relative;
    z-index: 2;

  }
</style>