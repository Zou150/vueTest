<template>
  <div class="wrapper">
      <div v-for="(item,index) in pageLists"
          :key="index">
          <p>{{item.title}}</p>
          <hr />
          <p>{{item.content}}</p>
          <p>{{time()}}</p>
      </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  components:{},
  props:{},
  store,
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    pageLists() {
      return store.state.list
    }
  },
  methods:{
    time() {
      var t = new Date(),
        y = t.getFullYear(),
        m = t.getMonth(),
        d = t.getDate(),
        h = t.getHours(),
        min = t.getMinutes();
      return y+'-'+m+'-'+d+' '+h+':'+min;
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{
  margin: 10px;
}
.wrapper div {
  border: 1px solid #7e7777;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
}
.wrapper div p:first-child {
  font-size: 18px;
  line-height: 25px;
}
.wrapper div p {
  font-size: 14px;
  line-height: 20px;
}
.wrapper div p:last-child {
  text-align: right;
}
</style>