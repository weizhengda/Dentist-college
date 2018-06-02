<template>
    <div id="TeacherIndex">
          <div class="header">
              <div class="top">
                  <img src="../../static/img/左翻页按下.png" alt="">
                  <span>讲师主页</span>
                  <span>已关注</span>
              </div>
              <div class="photo">
                  <img src="../../static/img/未知.png" alt="">
              </div>
              <div class="name">
                  <p>牙医管家官方主播</p>
              </div>
              <div class="info">
                  <p><span>关注2</span><span>粉丝1</span></p>
              </div>
          </div>
          <div class="course">
              <panel>
                <panel-header><div class="panel-header"><span>单次课</span><a href="">查看全部</a></div></panel-header>
                <panel-body>
                  <media-box type="small_appmsg">
                    <media-body>
                      <cells type="access">
                        <link-cell link="javascript:;">
                          <div class="item-body">
                          <img class="panel-img" slot="header" src="../../static/img/course_img.png">
                          <div class="panel-text" slot="body">
                               <div class="title">护士服务礼仪及接诊流程</div>
                               <div class="time">10月18日 19:30:00</div>
                               <div class="times">
                                   <div>1天后2723次学习</div>
                                   <div class="price"><span>￥</span><span>199</span><span>.00</span></div>
                               </div>
                            </div>
                          </div>
                          <span slot="footer"></span>
                        </link-cell>
                      </cells>
                    </media-body>
                  </media-box>
                </panel-body>
              </panel>
          </div>
           <div class="course" >
              <panel>
                <panel-header><div class="panel-header"><span>系列课</span><a href="">查看全部</a></div></panel-header>
                <panel-body >
                  <media-box type="small_appmsg">
                    <media-body>
                      <cells type="access">
                        <link-cell link="javascript:;">
                           <div class="item-body">
                          <img class="panel-img" slot="header" src="../../static/img/course_img.png">
                          <div class="panel-text" slot="body">
                               <div class="title">护士服务礼仪及接诊流程</div>
                               <div class="time">10月18日 19:30:00</div>
                               <div class="times">
                                   <div>1天后2723次学习</div>
                                   <div class="price"><span>￥</span><span>199</span><span>.00</span></div>
                               </div>
                            </div>
                          </div>
                            <div class="item-body">
                          <img class="panel-img" slot="header" src="../../static/img/course_img.png">
                          <div class="panel-text" slot="body">
                               <div class="title">护士服务礼仪及接诊流程</div>
                               <div class="time">10月18日 19:30:00</div>
                               <div class="times">
                                   <div>1天后2723次学习</div>
                                   <div class="price"><span>￥</span><span>199</span><span>.00</span></div>
                               </div>
                            </div>
                          </div>
                          <span slot="footer"></span>
                        </link-cell>
                      </cells>
                    </media-body>
                  </media-box>
                </panel-body>
              </panel>
          </div>
    </div>
</template>

<script>
import {Panel} from 'vue-weui'
export default {
  name: "TeacherIndex",
  data(){},
  component: {
    Panel
  },
  methods: {},
  mounted: {}
};
</script>
<style scoped>
#TeacherIndex {
  width: 640px;
  height: auto;
  background: rgba(240, 240, 240);
}
.header {
  width: 100%;
  height: 320px;
  text-align: center;
  background: rgba(27, 201, 179);
  color: #fff;
  font-size: 20px;
}
.header .top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
}
.header .top img {
  width: 20px;
  height: 20px;
  margin: 10px 20px;
}
.header .top span:nth-of-type(1) {
  font-size: 24px;
  padding-left: 30px;
}
.header .top span:nth-of-type(2) {
  padding: 0 20px;
}
.header .photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid rgba(35, 220, 201);
}
.header .name {
  font-size: 24px;
}
.header .info {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.header .info span {
  padding: 0 50px;
  text-align: center;
}
.header .info span:nth-of-type(2) {
  border-left: 1px solid #fff;
}
.course{background:#fff;margin-bottom:20px;}
.course panel{margin:10px 20px}
.course panel .panel-header{display:flex;justify-content: space-between;margin:0 20px;font-size:24px}
.course panel .panel-header a{color:#999;}
.item-body{width:640px;height:195px;}
.course panel .panel-img{width:200px;height:125px;margin:20px;display:block;float:left}
.course panel .panel-text{background:#fff;font-size:20px}
.course panel .panel-text .title{height:60px;line-height:60px;font-size:24px;}
.course panel .panel-text .time{height:50px;line-height:50px;color:#999;}
.course panel .panel-text .times{display:flex;justify-content: space-between;height:50px;line-height:50px;margin:0 20px;color:#999}
.course panel .panel-text .times .price{color:red}
.course panel .panel-text .times .price span:nth-of-type(2){font-size:30px}
</style>

