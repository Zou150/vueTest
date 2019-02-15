<template>
  <div class="wrapper">
      <form v-if="!isReg">
        <p>欢迎登录</p>
        <div>
          <span>登录名&nbsp;</span>
          <input type="text" v-model="name">
        </div>
        <div>
          <span>&nbsp;&nbsp;&nbsp;密码&nbsp;</span>
          <input type="password" v-model="password">
        </div>
        <button class="button" type="button" @click="login()">登录</button>
        <button class="button" type="button" @click="reg()">注册</button>
      </form>
      <form v-else>
        <p>请输入以下信息</p>
        <div>
          <span>用户名&nbsp;</span>
          <input type="text" v-model="name">
        </div>
        <div>
          <span>&nbsp;&nbsp;&nbsp;密码&nbsp;</span>
          <input type="password" v-model="password">
        </div>
        <div>
          <span class="mL18">确认密码&nbsp;</span>
          <input type="password" v-model="repeat">
        </div>
        <button class="button" type="button" @click="addUser()">确定</button>
        <button class="button" type="button" @click="cancle()">取消</button>
      </form>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  watch:{},
  computed:{},
  methods:{
      login() {
        if(this.name == '' || this.password == '') {
          alert('请输入登录名/密码')
        }else if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
            this.name = ''
            this.password = ''
            this.$router.push('/home/list')
        }else{
            alert('用户名密码不正确！')
            this.password = ''
        }
      },
      reg() {
          this.isReg = true
      },
      cancle() {
          this.isReg = false
      },
      addUser() {
        if(this.name == '' || this.password == '') {
          alert("用户名/密码不能为空！")
        }else if(this.password === this.repeat) {
            localStorage.setItem('name',this.name)
            localStorage.setItem('password',this.password)
            this.name = ''
            this.password = ''
            this.isReg = false
          }else{
              alert('两次密码输入不一致！')
          }
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper {
  text-align: center;
  line-height: 30px;
  padding-top: 10px;
}
.wrapper form input {
  border: 1px solid #c4cfc9;
  border-radius: 5px;
  height: 20px;
}
.wrapper form .mL18 {
  margin-left: -18px;
}
.button {
  width: 100px;
  height: 25px;
  color: #7bc8a4;
  background: #ffffff;
  border-radius: 1em;
  border: 1px solid;
  margin: 20px 0 0 10px;
}
.button:hover {
  color: #fff;
  background: #7bc8a4;
}
</style>