<template>
    <div id="live">
        <!-- 视频 -->
        <video class="bgc-dark" width="100%" height="180px" src=""></video>
        <div class="weui-cell bgc-white flex-sb">
                <div class="weui-cell__hd flex-1 tex-l fz-035">
                    <img :src="getsteimg(live)" class="w-05  val-mid mr-015">
                    <em class="fc-919" :class="{'fc-red':live.attention==='已关注'}">{{live.attention}}</em>
                </div>
                <div class="weui-cell__bd flex-1 tex-c fc-333 fz-035"><span>直播中</span></div>
                <div class="weui-cell__bd flex-1 tex-r fc-919 fz-035"><span>27233人次</span></div>
        </div>
        <!-- 消息面板 -->
        <div class="msg" style="padding:10px 15px">
             <div class="left flex">
                 <div class="photo"><img class="w-1 h-1" src="/static/img/ren.png" alt=""></div>
                  <div class="author pall-02 flex flex-dc">
                      <div class="name pl-03"><span>海洋</span><span>主播</span></div>
                      <div class="msg1" @click="msg1Cli">12343434343434343434341212121212121212</div>
                      <!-- <div class="msg1" :class="{'msg1_default':msg1,'msg1_press':!msg1}" @click="msg1Cli">12343434343434343434341212121212121212</div> -->
                  </div>
             </div>
             <div class="right flex-fe pall-01 mb-02">
                 <div class="wrap max-w-p60 pall-01 flex-fe bgc-ccc bdr-015">
                    <div class="msg2 min-h-05 pr-02" style="word-wrap: break-word">说下这个说下这个说下这个说下这个</div>
                    <div class="photo w-05 h-05"><img class="w-05 h-05" src="/static/img/ren.png" alt=""></div>
                 </div>
             </div>
            <div class="right flex-fe pall-01 mb-02">
                 <div class="wrap max-w-p60 pall-01 flex-fe bgc-ccc bdr-015">
                    <div class="msg2 h-05 pr-02">123</div>
                    <div class="photo w-05 h-05"><img class="w-05 h-05" src="/static/img/ren.png" alt=""></div>
                 </div>
             </div>
        </div>
        <!-- 讨论面板 -->
        <div class="discuss bgc-white bline">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p><span>讨论</span><span>(199)</span></p>
                </div>
            </div>
            <div class="flex pall-02">
                <div class="" style="margin-right: 10px;">
                    <img src="/static/img/ren.png" style="width: 1rem;display: block">
                </div>
                <div class="">
                    <p class='fz-04'>海洋</p>
                    <p class="fz-035 fc-8">10月20日</p>
                    <p class="fz-04">老师讲的太好了,超赞的</p>
                </div>
           </div>
            <div class="flex pall-02">
                <div class="" style="margin-right: 10px;">
                    <img src="/static/img/ren.png" style="width: 1rem;display: block">
                </div>
                <div class="">
                    <p class='fz-04'>海洋</p>
                    <p class="fz-035 fc-8">10月20日</p>
                    <p class="fz-04">老师讲的太好了,超赞的</p>
                </div>
           </div>
        </div>
         <!--底部固定输入-->
        <div class="fixedfot bgc-white pb-02 h-1d2">
             <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="来说点什么吧">
                </div>
                 <div class="weui-cell__bd w-05 h-05 pl-03">
                   <div class="w-05 h-05" :class="{'barrage_default':barrage,'barrage_press':!barrage}" @click="barrageCli"></div>
                </div>
                <div class="weui-cell__bd w-05 h-05 pl-03">
                   <div  class="w-05 h-05" :class="{'msg_default':msg,'msg_press':!msg}" @click="msgCli"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  name: 'live',
  data () {
    return {
      live: {
        attention: '已关注'
      },
      barrage: false,
      msg: false,
      msg1: false
    }
  },
  methods: {
    getsteimg (live) {
      if (live.attention === '已关注') {
        return '/static/img/gzok.png'
      } else {
        return '/static/img/gzno.png'
      }
    },
    barrageCli () {
      this.barrage = !this.barrage
    },
    msgCli () {
      this.msg = !this.msg
    },
    msg1Cli () {
      this.msg1 = !this.msg1
    }
  }
}
</script>
<style scoped>
 .weui-input{
     width:240px;
     padding:0 .5rem;
     height:1rem;
     border-radius: .5rem;
     background:#f0f0f0;
 }
 .msg1{
     width:80%;
     word-break:break-all;
     word-wrap:break-word;
 }
.barrage_default{
     background:url(/static/img/barrage_default.png) no-repeat center center;
     background-size:100% 100%;
 }
.barrage_press{
     background:url(/static/img/barrage_press.png) no-repeat center center;
     background-size:100% 100%;
 }
.msg_default{
     background:url(/static/img/msg_default.png) no-repeat center center;
     background-size:100% 100%;
 }
.msg_press{
     background:url(/static/img/msg_press.png) no-repeat center center;
     background-size:100% 100%;
 }
.msg1_default{
     background:url(/static/img/msg1_default.png) no-repeat center center;
     background-size:100% 100%;
 }
.msg1_press{
     background:url(/static/img/msg1_press.png) no-repeat center center;
     background-size:100% 100%;
 }
 .weui-input::-webkit-input-placeholder{
            color:#a4b0af;
 }
</style>
