<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner = "banners"></home-swiper>
    <recommoned :recommend = "recommend"></recommoned>
    <feature-view></feature-view>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @btnclick = "btnclick"></tab-control>
    <list :goods="showGoods"></list>

  </div>
</template>

<script>
import HomeSwiper from './childcomponents/HomeSwiper'
import Recommoned from './childcomponents/RecommonView'
import FeatureView from './childcomponents/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/context/tabControl/TabControl'
import List from 'components/context/goods/goodList'

import {getHomeMultidata,getHomeData} from 'network/home'

export default {
  components: {
    HomeSwiper,
    Recommoned,
    FeatureView,
    NavBar,
    TabControl,
    List
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
      currentIndex: 'pop'
    }
  },
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
        this.goods[type].page++
        
      })
    }
  }
}
</script>

<style>
  #home{
    margin-top: 44px;
  }
  .home-bar {
    /* background-color: #ff8198; */
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 1;
  }
</style>