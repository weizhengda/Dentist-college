<template>
  <div id="lessinfocom" class="bgc-f0">
    <!--顶部区域-->
    <a class="weui-cell weui-cell_access h-bgimg h-1d95" href="javascript:;">
      <div class="weui-cell__hd  mr-01"><img :src="userinfo.faceimg" alt="" class="w-1d1" style="display:block"></div>
      <div class="weui-cell__bd">
        <p class="fc-white fz-04">{{userinfo.name}}</p>
      </div>
        <div class="weui-cell__ft">&nbsp;</div>
    </a>
    <!--我的关注-->
    <a class="weui-cell weui-cell_access bgc-white" href="javascript:;">
      <div class="weui-cell__hd  mr-01"><img src="/static/img/mygz.png" alt="" class="w-05 h-05" style="display:block"></div>
      <div class="weui-cell__bd">
        <p class="fz-035">我的关注</p>
      </div>
    </a>
    <!--购买记录-->
    <a class="weui-cell weui-cell_access bgc-white" href="javascript:;">
      <div class="weui-cell__hd  mr-01"><img src="/static/img/buycar.png" alt="" class="w-05 h-05" style="display:block"></div>
      <div class="weui-cell__bd">
        <p class="fz-035">购买记录</p>
      </div>
    </a>
    <!--学习记录-->
    <a class="weui-cell weui-cell_access bgc-white" href="javascript:;">
      <div class="weui-cell__hd  mr-01"><img src="/static/img/sturecord.png" alt="" class="w-05 h-05" style="display:block"></div>
      <div class="weui-cell__bd">
        <p class="fz-035">学习记录</p>
      </div>
    </a>

    <!--底部固定这里需要补相同高度的空-->
    <div class="h-1"></div>

    <!--底部固定区域-->
    <div class="fixedfot pb-02 h-1">
      <div class="weui-navbar">
          <router-link class="weui-navbar__item fz-04" to="/">首页</router-link>
          <router-link class="weui-navbar__item weui-bar__item_on fz-04" to="/lessinfo"> 个人中心</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {
        name: '王大志',
        faceimg: '/static/img/ren.png'
      }
    }
  }
}
</script>

<style scoped>
.h-bgimg{background: url(/static/img/hederbg.png) no-repeat left top / 100% auto;}
.weui-cell_access .weui-cell__ft:after {border-color: #fff;}
.weui-navbar__item{color: #333333;font-family: PingFang-SC-Medium;}
.weui-bar__item_on{background-color: #1BC4B6; color:#fff}
</style>
