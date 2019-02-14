<template>
  <div class="wrapper">
    <button type="button" @click="reg()">登录</button>
    <button type="button">注册</button>
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
  methods:{
    reg() {
      this.$router.push('/home/list')
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>