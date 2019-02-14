<template>
  <div class="wrapper">
      <p>标题</p>
      <input type="text" v-model="title">
      <p>内容</p>
      <input type="text" v-model="content">
      <div class="btn" @click="add()">添加</div>
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
      title: '',
      content: ''
    }
  },
  watch:{},
  computed:{},
  methods:{
      add() {
          store.commit('addItem',{
            title: this.title,
            content: this.content
          }),
          this.title = '',
          this.content = ''
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