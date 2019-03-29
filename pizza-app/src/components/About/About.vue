<template>
  <div>
      <div class="row mb-5">
        <div class="col-4">
            <!-- 导航 -->
          <div class="list-group mb-5">
              <router-link tag='li' class="nav-link" to='/contact'>
                  <a class="list-group-item list-group-item-action">订餐信息</a>
              </router-link>
              <router-link tag='li' class="nav-link" to='/delivery'>
                  <a class="list-group-item list-group-item-action">联系我们</a>
              </router-link>
              <router-link tag='li' class="nav-link" to='/history'>
                  <a class="list-group-item list-group-item-action">历史信息</a>
              </router-link>
              <router-link tag='li' class="nav-link" to='/orderingguide'>
                  <a class="list-group-item list-group-item-action">快递信息</a>
              </router-link>
          </div>
        </div>
        <div class="col-8">
            <!-- 导航对应的内容 -->
          <router-view></router-view>
        </div>
      </div>
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
<style  scoped>
.wrapper{}
</style>