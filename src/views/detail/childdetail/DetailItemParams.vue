<template>
  <div class="detailparams">
    <div v-if="Object.keys(detailparams).length !== 0">

      <div class="rule">
        <table v-for="item in detailparams.rule.tables" class="table">
        <tr v-for="tr in item" class="tr">
          <td v-for="td in tr" class="td">{{ td }}</td>
        </tr>
        </table>
      </div>

      <div class="rule">
        <table class="table">
          <tr v-for=" info in detailparams.info.set" class="tr">
            <td class="td key">{{ info.key }}</td>
            <td class="td value">{{ info.value }}</td>
          </tr>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailparams:{
      type: Object,
      detault(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .rule{
    text-align: center;
    margin-top: 7px;
  }
  .table{
    width: 100%;
    font-size: 14px;
  }
  .tr{
    display: flex;
    line-height: 30px;
    border-bottom: solid 3px rgb(242,245,248);
  }
  .td{
    flex: 1;
    margin: 5px 0;
  }
  .key{
    flex: 1;
    padding-left: 5px;
  }
  .value{
    flex: 3;
    text-align: left;
    padding-left: 50px;
    color: var(--color-high-text);
  }
</style>