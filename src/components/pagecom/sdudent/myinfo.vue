<template>
    <div id="myinfo">
        <div class="weui-cell weui-cell_access bgc-white">
                <div class="weui-cell__bd mr-01 fz-04 fc-dark" >
                    <span style="vertical-align: middle">头像</span>
                </div>
                <div class="weui-cell__ft">
                     <img :src="userinfo.faceimg" alt="">
                </div>
        </div>
        <div class="weui-cell weui-cell_access bgc-white">
                <div class="weui-cell__bd mr-01 fz-04 fc-dark">
                    <span style="vertical-align: middle">姓名</span>
                </div>
                <div class="weui-cell__ft fc-69 fz-04 tex-r">
                    <span>王老五</span>
                </div>
        </div>
        <div class="weui-cell weui-cell_access bgc-white">
                <div class="weui-cell__bd mr-01 fz-04 fc-dark">
                    <span style="vertical-align: middle">性别</span>
                </div>
                <div class="weui-cell__ft fc-69 fz-04 tex-r">
                    <span>男</span>
                </div>
        </div>
    </div>
</template>
<script>
export default{
  name: 'myinfo',
  data () {
    return {
      userinfo: {
        name: '王老五',
        faceimg: '/static/img/ren.png',
        sex: '男'
      }
    }
  }
}
</script>
<style scoped>
.weui-cell__ft img{width: 30px;height:30px;float: right;}
</style>
