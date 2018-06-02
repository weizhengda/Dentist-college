<template>
<div class="bgc-white wh-p100 dsp-abs">
    <div class="login_com bgc-white" id="login_com" style="text-align:center !important">
      <div class="lg_logo">
        <span class="lg"></span>
      </div>
      <div class="login_input  mt-015 lgbg nobdr">
        <table width=90% cellspacing="0" cellspadding="0" align="center" class=" tline bline ma-auto">
          <tr>
            <td class="lg_hintnew  lgbg"><img src="/static/img/lgzh1.png"></td>
            <td colspan="2" class="lg_valnew lgbg">
              <input type="tel" class="pl-02   fz-035 bgc-ap" v-model="account" placeholder="请输入手机号,新用户登录即注册" />
            </td>
          </tr>
        </table>
        <table width=90% cellspacing="0" cellspadding="0" align="center" class=" bline ma-auto">
          <tr>
            <td class="lg_hintnew  lgbg"><img src="/static/img/lgmm1.png"></td>
            <td class="lg_valnew lgbg">
              <input type="tel" class="pl-02  fz-035 bgc-ap" v-model="password" placeholder="请输入验证码" />
            </td>
            <td class="login_dtpass">
              <span class="fz-035 nzmcl" data-flag='0' ref="sendyzm" @click="send_dpasswd">发送验证码</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="lg_btn_area mt-015">
        <input style="width:82%" type="button" value="登录" @click="signup" class="lg_login bgc-1BC4B6  fz-05 bdr-06 fc-white">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '', // 账号
      password: '' // 密码
    }
  },
  methods: {
    /**
     * @description 发送验证码
     * @author 曾令兵
     * @version 2018/05/30
     */
    send_dpasswd: function () {
      let flag = this.$refs['sendyzm'].getAttribute('data-flag')
      if (parseInt(flag) == 1) {
        return
      }
      let vm = this
      this.$refs['sendyzm'].style.color = '#cecbcb'
      this.$refs['sendyzm'].setAttribute('data-flag', '1')
      let endMinute = 60
      let tm = window.setInterval(function () {
        --endMinute
        vm.$refs['sendyzm'].innerText = endMinute + '秒'
        if (endMinute <= 0) {
          clearInterval(tm)
          vm.$refs['sendyzm'].style.color = '#FF6021'
          vm.$refs['sendyzm'].setAttribute('data-flag', '0')
          vm.$refs['sendyzm'].innerText = '发送动态密码'
        }
      }, 1000)

      Gpublib.openLoading('1', 3)
      let params = {
        'mobile': vm.account
      }
      let url = '/wx/logincode'
      $.post(url, params, function (response) {
        // Gpublib.closeLading();
        if (response.code == 1) {

        } else {
          clearInterval(tm)
          endMinute = 60
          vm.$refs['sendyzm'].style.color = '#FF6021'
          vm.$refs['sendyzm'].setAttribute('data-flag', '0')
          vm.$refs['sendyzm'].innerText = '发送动态密码'
          vm.open_alert(response.info, function () {})
        }
      })
    },
    /**
     * @description 登录处理
     * @author 曾令兵
     * @version 2018/05/30
     */
    signup: function () {
      let vm = this
      let valids = []
      if (vm.account == '') {
        valids.push('手机号不能为空!')
      }
      if (vm.password == '') {
        valids.push('验证码不能为空!')
      }
      if (valids.length > 0) {
        // vm.open_alert(valids.join('<br>'), function() {});
        return false
      }
      // Gpublib.openLoading('1', 3);
      let params = {
        'mobile': vm.account,
        'checkcode': vm.password
      }
      let url = '/wx/login'
      // $.post(url, params, function(response) {
      //     Gpublib.closeLading();
      //     if (response.code == 1) {
      //         if (response.url) {
      //             window.location.href = response.url;
      //         } else
      //             window.location.href = "/";
      //     } else {
      //         vm.open_alert(response.info, function() {});
      //     }
      // })
    }
  }
}
</script>

<style scoped>
.login_dtpass {
  width: 3.5rem;
  color: #1CAA5D;
  position: relative;
}
.login_dtpass span {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 0.1rem;
  line-height: 1.1rem;
  padding-bottom: 0.1rem;
  color: #FF6021;
  height: 0.47rem;
  height: 1.05rem;
  border-bottom-right-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  width: 3rem;
  text-align: center;
}
.lg_login {
  width: 90%;
  height: 1.2rem;
  border: none;
}
.lg_hintnew {
  width: 1.1rem;
  text-align: right;
  height: 1.2rem;
}
.lg_hintnew img {
  height: 52%;
}
.lg_btn_area {
  text-align: center;
  height: auto;
}
.nobdr {
  border: none !important;
  outline: none;
}
.lg_valnew input {
  width: 100%;
  height: 1.2rem;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.login_input {
  width: 92%;
  margin-left: 4%;
  border-radius: 0.1rem;
  border: solid 0px #e0e0e0;
  box-sizing: border-box;
}
.lgbg {
  background-color: transparent !important;
}
.lg_logo {
  height: auto;
  margin-top: 10%;
}
.lg_logo .lg {
  border-radius: 50%;
  padding: 0.3rem;
  width: 2.3rem;
  height: 2.3rem;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  background: url(/static/img/logo.png) no-repeat center center;
  background-size: 100% auto;
}
</style>
