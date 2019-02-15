<template>
  <div class="wrapper">
      <p>标题</p>
      <input type="text" v-model="title">
      <p>内容</p>
      <textarea type="text" id="" rows="20" v-model="content"></textarea>
      <div class="btn">
        <button type="button" @click="add()">完成</button>
        <button type="button" @click="cell()">取消</button>
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
          this.content = '',
        this.$router.push('/home/list')
      },
      cell() {
        this.title = '',
        this.content = '',
        this.$router.push('/home/user')
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{
  margin: 10px 10px;
}
.wrapper input,
textarea {
  padding: 5px;
  border: 1px solid #8f8b8b98;
  border-radius: 5px;
  width: 100%;
}
.btn button{
  // margin-top: 30px;
  color: #7bc8a4;
  background: #fff;
  width: 40%;
  height: 28px;
  text-align: center;
  border: 1px solid #7bc8a4;
  margin: 30px 5%;
  border-radius: 5px;
  &.active {
    color: #fff;
    background: #7bc8a4;
  }
}
</style>