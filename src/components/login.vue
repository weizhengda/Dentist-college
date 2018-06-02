<template>
  <div class="login_cs">
    {{msg}}
    <form>
    <div>
      <label>用户名</label>
      <p>
          <input placeholder="请输入用户名..." v-model="name"/>
      </p>
    </div>
    <div>
      <label class="fc-red">密码</label>
      <p>
          <input v-model="pwd" type="password" placeholder="请输入密码..."/>
        </p>
    </div>
    <br/>
    <button @click="isLogin">登陆</button>
    <button @click="demo">测试全局函数</button>

    <message icon="success" title="操作成功">
      <span slot="content">内容详情，可根据实际需要安排</span>
      <button-area slot="operation">
        <weui-button type="primary">确定</weui-button>
        <weui-button type="default">取消</weui-button>
      </button-area>
      <a href slot="extra">查看详情</a>
    </message>

    </form>
  </div>
</template>

<script>
import {Message, ButtonArea, Button} from 'vue-weui'
export default{
  name: 'userLogin',
  components: {
    Message,
    ButtonArea,
    'weui-button': Button
  },
  data () {
    return {
      msg: '登录',
      pwd: '',
      name: '匿名',
      error: ''
    }
  },
  methods: {
    demo () {
      // alert('aa')
      this.mdemo()
    },
    isLogin () {
      // alert('demo')
      const newUser = {
        name: 'zlb',
        flag: 1
      }
      this.$store.dispatch('setLoginState', newUser)
      this.$router.push({path: '/'})
      // this.$router.go(-1)
      // this.$router.go('/')
    //   this.$store.commit('isLogin', 'zlb')
    //   console.log('response.body[0]=',response.body[0])
    //   this.$store.commit('isLogin',response.body[0]);
    }
  },
  created () {
    this.$axios.post('/netconsult/scheduledaydoctcon').then(response => {
      this.results = response.data
      console.log(this.results)
    })
    console.log('starting...')
  }
}
</script>

<style scoped>
.login_cs{width:400px;height:200px; margin: auto;background-color: #eee;border-radius: 5px}
</style>
