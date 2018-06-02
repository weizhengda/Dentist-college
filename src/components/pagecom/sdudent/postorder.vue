<template>
  <div id="stupostorder" class="bgc-f0">
    <!--标题-->
    <p class="fz-04 pall-02 fc-gray">课程信息</p>
    <!--课程信息-->
    <div class="weui-cell bgc-white bline notline">
      <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
        <img :src="lessinfo.img" style="width: 2.2rem;display: block">
      </div>
      <div class="weui-cell__bd">
        <p class='fz-04'>{{lessinfo.title}}</p>
        <p class="fz-035 fc-8">{{lessinfo.descrpt}}</p>
        <p class="fc-red fz-04">{{lessinfo.price}}</p>
      </div>
    </div>
    <!--优惠码-->
    <a class="weui-cell weui-cell_access bgc-white notline" href="javascript:;">
      <div class="weui-cell__hd"><img src="/static/img/yhma.png" class="w-08 val-mid"></div>
      <div class="weui-cell__bd weui-cell_primary">
        <p class="fz-035 pl-015">优惠码</p>
      </div>
      <span class="fz-035">已优惠￥99.00</span>
    </a>
    <!--微信支付-->
    <a class="weui-cell weui-cell_access bgc-white" href="javascript:;">
      <div class="weui-cell__hd"><img src="/static/img/wxpay.png" class="w-08 val-mid"></div>
      <div class="weui-cell__bd weui-cell_primary">
        <p class="fz-035 pl-015">微信支付</p>
      </div>
      <span class="fz-035 fc-red">￥100.00</span>
    </a>

    <!--底部固定这里需要补相同高度的空-->
    <div class="h-1d1"></div>

    <!--底部固定区域-->
    <div class="fixedfot pb-02 h-1d2">
      <a href="javascript:;" class="weui-btn weui-btn_primary w-p95 bgc-1BC4B6 bdr-005">微信支付</a>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      lessinfo: {
        img: '/static/img/course_img.png',
        title: '完美口腔摄影技巧',
        descrpt: '助你高效获客',
        price: '￥199.00'
      }
    }
  }
}
</script>

<style scoped>
.notline:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #fff;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  left: 15px;
  z-index: 2;
}

</style>
