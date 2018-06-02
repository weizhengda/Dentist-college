<template>
    <div id="couponAdd">
         <div class="notice">
            <p>0表示免费，100%表示无折扣，折扣生成后不可修改</p>
        </div>
        <div class="discount">
             <span>优惠码折扣</span><input type="number" placeholder="请输入百分比">
        </div>
         <div class="save">
            <router-link to="/couSetting">生成优惠码</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'couponAdd',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="scss" scoped>
      #couponAdd{
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
          height: 88px;
          line-height:88px;
          padding:0 20px;
          font-size: 28px;
          background: #fff;
          display:flex;
          span{
              flex:1;
              color: #333333;
          }
          input{
              flex:3;
              width:200px;
              height:50px;
              font-size: 28px;
              padding:0 10px;
              margin:22px 0;
              text-align: right;
              border:none;
              &[placeholder]{
                color:#ccc;
              }
              &.focus{
                outline: none;
              }
          }
      }
      .save{
          display: block;
          margin:40px 20px;
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
