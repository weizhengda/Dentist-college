<template>
    <div id="index">
    <!--底部固定这里需要补相同高度的空-->
    <div class="baner">
        <!-- <img src="/static/img/banner.png" alt=""> -->
    </div>
    <div class="h-1"></div>
    <!--底部固定区域-->
    <div class="fixedfot pb-02 h-1">
      <div class="weui-navbar">
          <router-link class="weui-navbar__item weui-bar__item_on fz-04" to="/">首页</router-link>
          <router-link class="weui-navbar__item fz-04" to="/lessinfo"> 个人中心</router-link>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Index',
  data: function () {
    return {

    }
  }
}
</script>
<style scoped>
.h-bgimg{background: url(/static/img/hederbg.png) no-repeat left top / 100% auto;}
.weui-cell_access .weui-cell__ft:after {border-color: #fff;}
.weui-navbar__item{font-family: PingFang-SC-Medium;color: #333333;}
.weui-bar__item_on{background-color: #1BC4B6; color:#fff}
.weui-bar__item_on a{color:#fff}
</style>
