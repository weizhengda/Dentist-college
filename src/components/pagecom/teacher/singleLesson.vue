<template>
    <div id="singleLesson">
        <div class="banner">
           <img src="../../../../static/img/banner.png" alt="">
        </div>
        <div class="lesson">
            <div class="title">
                <h3>完美口腔美学摄影技巧，助你高效获客!</h3>
            </div>
            <div class="status">
                <span>已结束</span><span>2723次学习</span>
            </div>
            <div class="teacher">
                <img src="" alt="">
                <span>李晓红</span>
            </div>
            <div class="detail">
                <h2>直播简介</h2>
                <span>主讲人：张利锋老师</span>
                <p>中国政法大学 法学学士</p>
                <p>加尔医疗集团市场运营总监</p>
                <span>主讲人：张利锋老师</span>
                <p>中国政法大学 法学学士</p>
                <p>加尔医疗集团市场运营总监</p>
            </div>
        </div>
        <div class="course">
             <div class="title">
                 <h3>更多课程</h3>
             </div>
             <div class="item">
                    <div class="img-content">
                        <img src="../../../../static/img/course_img.png" alt="">
                    </div>
                    <div class="detail">
                          <h2>护士服务礼仪及接诊流程</h2>
                          <p>10月18日 19:30 1天后</p>
                          <p>2723次学习</p>
                          <h3>￥1,599.00</h3>
                    </div>
             </div>
             <div class="item">
                    <div class="img-content">
                        <img src="../../../../static/img/course_img.png" alt="">
                    </div>
                    <div class="detail">
                          <h2>护士服务礼仪及接诊流程</h2>
                          <p>10月18日 19:30 1天后</p>
                          <p>2723次学习</p>
                          <h3 class="free">免费</h3>
                    </div>
             </div>
        </div>
         <div class="nav">
            <router-link to="/"><img src="../../../../static/img/icon_yhq.png" alt=""><span>优惠码</span></router-link>
            <router-link to="/">进入直播间</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'singleLesson',
  data () {

  }
}
</script>
<style lang="scss" scoped>
  $family-B: PingFang-SC-Bold;
   $family-M: PingFang-SC-Medium;
   #singleLesson {
    .banner{
        height:360px;
        img {
            width:100%;
            height:100%;
        }
    }
    .lesson  {
        margin:0 20px;
        .title {
            font-size: 26px;
            height:80px;
            line-height:80px;
            background-color: #ffffff;
        }
        .status{
            height:20px;
            line-height:20px;
            font-size: 20px;
            color: #919b9a;
            span{
                padding:0 20px;
                position: relative;
                &:nth-of-type(1)::before{
                    content:'';
                    width:10px;
                    height:10px;
                    border-radius: 50%;
                    position: absolute;
                    top:5px;
                    left:0;
                    background:#919b9a;
                }
                &:nth-of-type(2){
                   border-left:1px solid #919b9a;
                }
            }

        }
        .teacher{
            display:flex;
            height:88px;
            line-height:88px;
            span{
               font-family: SourceHanSansCN-Normal;
               font-size: 24px;
               color: #333333;
            }
        }
        .detail{
            font-family: SourceHanSansCN-Normal;
	        font-size: 22px;
            color: #686868;
            h2{
                font-family: SourceHanSansCN-Medium;
                color: #333333;
            }
            p,span{
                height:40px;
                line-height:40px;
            }
            span{
                display:inline-block;
                margin-top:25px;
            }
        }
    }
    .course{
            width:100%;
            padding-bottom:24px;
            background:#fff;
            margin-bottom:32px;
              .title{
                display:flex;
                justify-content: space-between;
                height:72px;
                margin:0 20px;
                line-height:72px;
                  h3{
                    font-family: $family-B;
                    font-size: 25px;
                    color: #333333;
                }
                  a{
                    font-family:  $family-M;
                    font-size:1.4rem;
                    color: #a4b0af;

                }
            }
              .item{
                display: flex;
                margin:0 20px 30px 20px;
                  .img-content{
                    width: 280px;
	                height: 160px;
                    margin-right:20px;
                      img{
                        width:100%;
                        height:100%;
                    }
                }
                  .detail{
                    flex:1;
                      h2{
                       font-family:  $family-B;
	                   font-size: 25px;
                       height: 36px;
                       line-height: 36px;
                       color: #333333;
                    }
                      p{
                       height: 36px;
                       line-height:36px;
                       font-family:  $family-M;
                       font-size: 20px;
                       color: #a0a0a0;
                    }
                      h3{
                        height: 22px;
                        font-family:  $family-M;
                        font-size: 24px;
                        color: #ff4949;
                        margin-top:16px;
                        text-align: right;
                        &.free{
                           color: #00c566;
                        }
                     }
                }
            }
        }
    .nav{
        width:100%;
        display:flex;
        height:98px;
        line-height:98px;
        position: fixed;
        bottom: 0;
        left:0;
        a{
            display:inline-block;
            text-align: center;
            box-shadow: inset 0px 1px 0px 0px #f0f0f0;
            &:nth-child(1){
                flex:1;
                font-size:21px;
                color: #f1a532;
                background:#fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                img{
                    width:40px;
                    height:40px;
                    line-height:50px;
                    margin:0 auto;
                }
                span{
                    width:100px;
                    height:40px;
                    line-height:50px;
                    margin:0 auto;
                }
            }
            &:nth-child(2){
                flex:2;
                font-size:36px;
                color:#fff;
                background-color: #f86d5a;
            }
        }
    }
 }
</style>
