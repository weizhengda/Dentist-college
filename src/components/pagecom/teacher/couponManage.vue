<template>
    <div id="couponManage">
        <div class="notice">
            <p>已使用优惠码人数（143人）</p>
        </div>
        <cells type="form">
           <!-- <switch-cell name="switch" label="标题文字" ></switch-cell> -->
        </cells>
        <div class="discount">
            <p><span>优惠码折扣</span><span>70%</span></p>
            <p><span>优惠码</span><span>KL10503</span></p>
        </div>
         <div class="save">
            <router-link to="/couAdd">保存</router-link>
        </div>
    </div>
</template>
<script>
import { Cells, SwitchCell } from 'vue-weui'
export default {
  name: 'couponManage',
  data () {
    return {
      switchOn: false
    }
  },
  components: {
    Cells,
    SwitchCell
  }
}
</script>
<style lang="scss" scoped>
   #couponManage{
       width:640px;
       .notice{
          height:72px;
          line-height: 72px;
          padding-left:20px;
          background-color: #ffecec;
          box-shadow: 0px 1px 0px 0px #f5d3d3;
          p {
             font-size: 24px;
             color: #ff6464;
             padding-left:30px;
             background:url(../../../../static/img/tishi.png) no-repeat left center;
             background-size:24px;
          }
       }
      .discount{
          p{
              display:flex;
              justify-content: space-between;
              padding:0 20px;
              height: 88px;
              line-height:80px;
              font-size: 28px;
              color: #333333;
	          background: #ffffff;
          }
      }
      .save{
          display: block;
          margin:0 20px;
          position: fixed;
          bottom:0;
          left:0;
          a{
             display:inline-block;
             width:600px;
             height:80px;
             font-size:30px;
             color:#fff;
             text-align: center;
             line-height:80px;
             border-radius: 3px;
             background-image: linear-gradient(45deg, #1bc4b6 0%, #1bd2ad 100%), linear-gradient(	#ff4545, #ff4545);
          }
      }
   }
</style>
