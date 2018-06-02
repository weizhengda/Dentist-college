<template>
    <div id="records">
     <!--课程信息-->
    <div class="weui-panel__bd bgc-white">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(item, index) in lessinfo" :key="index">
            <div class="weui-media-box__hd" >
                <img class="weui-media-box__thumb" :src="item.img" alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title fz-04">{{item.title}}</h4>
                <p class="weui-media-box__desc fz-035 fc-8">{{item.author}}</p>
            </div>
         </a>
    </div>
    </div>
</template>
<script>
export default{
  name: 'records',
  data () {
    return {
      lessinfo: [{
        img: '/static/img/course_img.png',
        title: '牙医管家专属培训课程',
        author: '李晓红'
      }, {
        img: '/static/img/course_img.png',
        title: '护士服务礼仪及接诊流程',
        author: '李晓红'
      }
      ]
    }
  }
}
</script>
<style scoped>
 .weui-media-box_appmsg .weui-media-box__hd{width:2.2rem}
</style>
