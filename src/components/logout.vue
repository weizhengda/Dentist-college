<template>
  <div class="login_cs">
  </div>
</template>

<script>
export default{
  name: 'logout',
  data () {
    return {}
  },
  created () {
    const newUser = {}
    this.$store.dispatch('setLoginState', newUser)
    this.$router.push({path: '/'})
  }
}
</script>

<style scoped>
</style>
