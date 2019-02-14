<template>
  <div>
    <router-view />
    <ul>
      <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
      <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
    </ul>
  </div>
  
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>