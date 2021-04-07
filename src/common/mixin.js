import {debound} from 'common/utils'
import BackTop from 'components/context/backtop/BackTop'

//图片加载完成之后刷新scroll，防止图片未加载完成时better-scroll计算的高度不正确导致不能刷新
export const scrollRefresh = {
  data(){
    return {
      scrollrefresh: null,
      refresh: null
    }
  },
  mounted(){
    this.refresh = debound(this.$refs.scroll.refresh,100)

    this.scrollrefresh = () => {
      this.refresh()
    }
    this.$bus.$on('iload',this.scrollrefresh)
  }
}


//点击返回顶部
export const scrollTop = {
  components:{
    BackTop
  },
  data(){
    return {
      isshow: false,
    }
  },
  methods:{
    backtop(){
      this.$refs.scroll.scrollto(0,0)
    },
  }
}