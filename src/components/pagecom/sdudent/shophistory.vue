<template>
    <div id="">
      <!--课程信息-->
       <div class="weui-panel__bd bgc-white">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(item, index) in lessonarr" :key="index">
                    <div class="weui-media-box__hd" >
                        <img class="weui-media-box__thumb" :src="item.img" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title fz-04 fc-333">{{item.title}}</h4>
                        <p class="weui-media-box__desc fz-035 fc-919 h-05 mb-01">{{item.type}}</p>
                        <p class="weui-media-box__desc fz-035 fc-8 h-05 flex">
                            <span class="fc-f86">{{item.status}}</span>
                            <span class="fc-919">{{item.date}}</span>
                        </p>
                    </div>
                </a>
        </div>
    </div>
</template>
<script>
export default{
  name: 'shophistory',
  data () {
    return {
      lessonarr: [{
        img: '/static/img/course_img.png',
        title: '牙医管家专属培训课程',
        type: '单次课',
        status: '未读',
        date: '2017-10-24'
      }, {
        img: '/static/img/course_img.png',
        title: '护士服务礼仪及接诊流程',
        type: '单次课',
        status: '未读',
        date: '2017-10-24'
      }
      ]
    }
  }
}
</script>
<style scoped>
.weui-media-box_appmsg .weui-media-box__hd{width:2.2rem}
.flex{
    display:flex;
    justify-content: space-between;
}
.price{color:#f86d5a}
.free{color:#00c566;}
</style>
