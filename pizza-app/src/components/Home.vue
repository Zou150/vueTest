<template>
  <div class="body">
    <div class="wrapper">
      <div class="content">
        <h1>Home</h1>
        <p>以上，我们使用 webpack 来打包我们的模块化后的应用程序，webpack 会生成一个可</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;
  min-height: 100vh;
}
.wrapper {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;
}
.wrapper:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  /* z-index: -1;  */
  box-shadow: 0 0 40px #fff;
}
.wrapper:after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  /* z-index: -2; */
  filter: blur(40px);
}
/* .wrapper:before,
.wrapper:after {
  background: linear-gradient(235deg,#89ff00,#060c21,#00bcd4)
} */
.content {
  padding: 20px;
  box-sizing: border-box;
  /* color: #fff; */
} 
</style>