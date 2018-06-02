<template>
   <div id="series">
          <div class="banner">
              <img :src="lesson.banner" alt="">
          </div>
          <div class="weui-cell bgc-white">
                <h3>{{lesson.title}}</h3>
           </div>
          <div class="weui-cell bgc-white pb-0">
                <div class="weui-cell__bd fc-919">
                    <p>{{lesson.number}}次学习</p>
                </div>
          </div>
          <div class="weui-cell  bgc-white h-1  mb-05">
                <div class="weui-cell__hd">
                    <img :src="lesson.photo" alt="" style="width:30px;margin-right:10px;display:block">
                </div>
                <div class="weui-cell__bd">
                    <p class="flex">
                        <span>{{lesson.author}}</span>
                        <span>
                            <img :src="getsteimg(lesson)" class="w-05  val-mid mr-015">
                            <em :class="{'fc-red':lesson.attention==='已关注'}">{{lesson.attention}}</em>
                        </span>
                    </p>
                </div>
          </div>
           <div class="weui-cell bgc-white fz-04">
               <p>直播简介</p>
           </div>
           <div class="weui-cell bgc-white ptb-01 fc-68 fz-03" v-for="(item, index) in lesson.livedetail" :key="index">
               <p>{{item}}</p>
           </div>
           <div class="weui-cell bgc-white fc-68 fz-03">
               <p>直播概要</p>
           </div>
           <div class="weui-cell bgc-white fc-68 ptb-01 fz-03" v-for="(item, index) in lesson.livenotice" :key="index">
               <p>{{item}}</p>
           </div>
           <div class="weui-cell bgc-white fz-04">
           </div>
           <div class="weui-cell bgc-white fz-04 mt-05">
               <p>更多课程</p>
           </div>
           <!--课程信息-->
            <div class="weui-panel__bd bgc-white">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(item, index) in lessonarr" :key="index">
                    <div class="weui-media-box__hd" >
                        <img class="weui-media-box__thumb" :src="item.img" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title fz-04">{{item.title}}</h4>
                        <p class="weui-media-box__desc fz-035 fc-8 h-05">{{item.date}}</p>
                        <p class="weui-media-box__desc fz-035 fc-8 h-05 flex">
                            <span class="number">{{item.number}}</span>
                            <span class="price" v-if="item.price != 0">￥{{item.price}}</span>
                            <span class="free" v-else>免费</span>
                        </p>
                    </div>
                </a>
            </div>
           <div class="footer  mt-05">
               <span class="bgc-white price">￥199.00</span>
               <router-link class="fc-f86" to="">购买课程</router-link>
          </div>
          <div class="footer  mt-05">
               <span class="bgc-white free">免费</span>
               <router-link class="free" to="">立即学习</router-link>
          </div>
          <div class="footer  mt-05">
               <span class="bgc-white free">已购买</span>
               <router-link class="free" to="">立即学习</router-link>
          </div>
   </div>
</template>
<script>
export default{
  name: 'series',
  data () {
    return {
      lesson: {
        'banner': '/static/img/banner.png',
        'title': '完美口腔美学摄影技巧，助你高效获客!',
        'number': 2723,
        'photo': '/static/img/ren.png',
        'author': '李晓红',
        'attention': '已关注',
        'livedetail': [
          '主讲人：张利锋老师',
          '中国政法大学 法学学士,',
          '加尔医疗集团市场运营总监,',
          '中国图丁教育联合创始人,',
          '中国名医教育市场运营总监,',
          '北京BEST百思特创意广告公司营销总监,',
          '北京BEST百思特创意广告公司营销总监,',
          '中国正畸之家协会秘书长,',
          '中国口腔医师联盟协会副会长'
        ],
        'livenotice': [
          '还没有进入课程直播间的小伙伴,',
          '请添加课程助手微信：DentaLink5,',
          '获取免费听课通道名额有限，先到先得！！',
          '获取免费听课通道名额有限，先到先得！！',
          '请添加课程助手微信：DentaLink5,',
          '获取免费听课通道名额有限，先到先得！！'
        ]
      },
      lessonarr: [{
        img: '/static/img/course_img.png',
        title: '牙医管家专属培训课程',
        author: '李晓红',
        date: '10月18日 19:30 3天后',
        number: 2723,
        price: 199.0
      }, {
        img: '/static/img/course_img.png',
        title: '护士服务礼仪及接诊流程',
        author: '李晓红',
        date: '10月17日 19:30 3天后',
        number: 2723,
        price: 0
      }
      ]
    }
  },
  methods: {
    getsteimg (lesson) {
      if (lesson.attention === '已关注') {
        return '/static/img/gzok.png'
      } else {
        return '/static/img/gzno.png'
      }
    }
  }
}
</script>
<style scoped>
   .banner{width:100%;height:180px;}
   .banner img{width:100%;height:100%;}
   .weui-cell:before {
       border:none;
   }
.weui-media-box_appmsg .weui-media-box__hd{width:2.2rem}
.flex{
    display:flex;
    justify-content: space-between;
}
.price{color:#f86d5a}
.free{color:#00c566;}
.footer{width:100%;height:50px;line-height:50px;font-size:20px;display:flex;text-align: center}
.footer span{flex:1}
.footer a{flex:2;background-color: #f86d5a;color:#fff}
</style>
