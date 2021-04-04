import {debound} from 'common/utils'

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