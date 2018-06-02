<template>
    <div id="couponSetting">
        <div class="card">
            <div class="discount">
                <span>7</span>
                <span>折</span>
            </div>
            <div class="munber">
                <p>优惠码</p>
                <p>105033</p>
            </div>
        </div>
         <div class="card">
            <div class="discount">
                <span></span>
                <span>无折扣</span>
            </div>
            <div class="munber">
                <p>优惠码</p>
                <p>105033</p>
            </div>
        </div>
         <div class="card">
            <div class="discount">
                <span></span>
                <span class="free">免费</span>
            </div>
            <div class="munber">
                <p class="free">优惠码</p>
                <p class="free">105033</p>
            </div>
        </div>
        <div class="add">
            <router-link to="/couAdd">添加优惠券</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'couponSetting',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  #couponSetting{
      width:100%;
      height:100%;
      .card{
          width: 590px;
	      height: 169px;
          margin:30px auto 0 auto;
          display:flex;
          background:url(../../../../static/img/yhq-bg.png);
          background-size: 100% 100%;
          .discount{
              flex:1;
              height:100px;
              line-height:100px;
              text-align: center;
              margin: 30px 0;
              color: #f1a532;
              span{
                  &:nth-of-type(1){
                       font-size: 48px;
                  }
                  &:nth-of-type(2){
                       font-size: 30px;
                  }
                  &.free{
                      color:#888;
                  }
              }
          }
          .munber{
              flex:3;
              height:50px;
              line-height:30px;
              text-align: left;
              padding-left:50px;
              border-left:1px solid #ccc;;
              margin: 55px 0;
              display: flex;
              flex-direction: column;
              p{
                 font-size: 20px;
                 color: #696969;
              }
              .free{
                  color:#888;
              }
          }
      }
      .add{
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
