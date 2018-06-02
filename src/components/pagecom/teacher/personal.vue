<template>
    <div id="personal">
         <div class="header">
             <div class="info">
                 <img src="../../../../static/img/btn_lianmai.png" alt="">
                 <div class="name">王大志</div>
             </div>
             <router-link to=""></router-link>
         </div>
         <div class="profit">
             <div class="all">
                 <span>总金额（元）</span>
                 <p>138.200.00</p>
             </div>
              <div class="yesterday">
                  <span>昨日收益（元）</span>
                  <p>5.200.00</p>
              </div>
              <router-link to=""></router-link>
         </div>
    </div>
</template>
<script>
export default {
  name: 'personal',
  data: function () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  #personal{
      width:100%;
      .header{
          height:162px;
          display:flex;
          padding:0 20px;
          background-image: linear-gradient(45deg, 	#1bc4b6 0%, #1bd2ad 100%), linear-gradient(#00c5b5, #00c5b5);
           .info{
               flex:1;
               display: flex;
               img{
                   width: 88px;
	               height: 88px;
                   margin:35px 0;
                   border-radius:50%;
                   background:#fff;
                   border:2px solid rgb(35,214,204)
               }
               .name{
                   line-height:162px;
                   font-size:30px;
                   margin:0 20px;
                   color:#fff;
               }
           }
           a{
               display:block;
               width:20px;
               text-align:left;
               background:url(../../../../static/img/jt-left.png) no-repeat center center;
               background-size:14px;
           }
      }
      .profit{
          display:flex;
          height:128px;
          background:#fff;
          margin-bottom: 20px;
          padding:0 30px;
          .all, .yesterday{
              flex:1;
              display:flex;
              flex-direction: column;
              span{
                  font-size:22px;
                  height:66px;
                  line-height:66px;
                  color: #919b9a;
              }
              p{
                  font-size: 36px;
                  height:28px;
                  line-height:28px;
                  color: #333333;
              }
          }
         a{
               display:block;
               width:20px;
               text-align:left;
               background:url(../../../../static/img/jt-left.png) no-repeat center center;
               background-size:14px;
           }
      }
  }
</style>
