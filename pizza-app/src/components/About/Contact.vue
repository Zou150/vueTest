<template>
  <div class="wrapper">
      <div class="card text-dark bg-light nb-3">
        <div class="card-header">点餐电话</div>
        <div class="card-body">
            <h4 class="card-title">点餐电话</h4>
            <p class="card-text">695475429</p>
        <router-link to='/phone'>电话</router-link>
        <router-link to='/phonename'>联系人</router-link>
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