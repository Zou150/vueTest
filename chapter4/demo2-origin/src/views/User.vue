<template>
  <div class="wrapper">
    <img src="../assets/logo.png" alt="123">
    <p>{{ getName() }}</p>
    <p>欢迎来到个人中心</p>
    <button class="button" type="button"><router-link :to="{name: 'add'}">添加</router-link></button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data() {
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    getName: function() {
      var name = localStorage.getItem('name');
      return name;
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{
  text-align: center;
  line-height: 20px;
}
.button {
  width: 300px;
  height: 28px;
  margin-top: 30px;
  border: 1px solid #83ad98;
  border-radius: 5px;
  background: #1d995f;;
}                              
.button a {
  color: #fff;
  text-decoration: none;
}
</style>