<template>
  <div class="wrapper">
    <ul>
      <li v-for="(item,index) in pageLists"
          :key="index">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
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
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>