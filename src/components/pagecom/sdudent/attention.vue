<template>
  <div id="stumyattention" class="bgc-f0">
    <!--标题-->
    <p class="fz-04 pall-02 fc-gray">共关注了{{datalist.length}}个主播</p>
    <!--关注列表数据-->
    <div class="weui-cell bgc-white" v-for="(item,inx) in datalist" :key="inx">
      <div class="weui-cell__hd mr-01 "><img :src="item.faceimg" class="w-1 h-1 bdr-p50" alt="" style="display:block"></div>
      <div class="weui-cell__bd">
          <p class="fz-035 pl-015">{{item.name}}</p>
      </div>
      <div class="weui-cell__ft fz-035"><img :src="getsteimg(item)" class="w-05  val-mid mr-015"><em :class="{'fc-red':item.state==='已关注'}">{{item.state}}</em></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: [{
        faceimg: '/static/img/ren.png',
        name: '林心如',
        state: '已关注'
      }, {
        faceimg: '/static/img/ren.png',
        name: '王宝强',
        state: '关注'
      }]
    }
  },
  methods: {
    getsteimg (item) {
      if (item.state === '已关注') {
        return '/static/img/gzok.png'
      } else {
        return '/static/img/gzno.png'
      }
    }
  }
}
</script>

<style scoped>

</style>
