<template>
  <div class="wrap">
    <div>header</div>
    <div>
      <router-link to="admin/shop-detail">shopDetail</router-link>
    </div>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
