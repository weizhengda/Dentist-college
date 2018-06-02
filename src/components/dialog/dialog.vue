<script type="text/javascript">
import Vue from 'vue'
import store from '../../store'// 使用状态变量必须
//  实现如alert对话框 2018-02-27 [zlb]
const Dialogpub = Vue.extend({
  store, // 使用状态变量必须
  template: ' <div class="ygdialog" v-show="isshow">' +
    '       <transition name="bounce">   ' +
    '           <div class="modalbody"> ' +
    '               <div class="modal_title"> ' +
    '                   <span class="ttile" v-html="top_title"></span>   ' +
    '                   <span class="closbtn" @click="close_panel">&#10005;</span>  ' +
    '               </div> ' +
    '               <div class="modal_card">  ' +
    '                   <div class="modal_card_body">' +
    '                       <slot name="modal_body"><p v-html="title"></p></slot>' +
    '                   </div>' +
    '                   <div class="modal_card_foot">' +
    '                       <slot name="footer">    ' +
    '                           <div class="abutton" @click="close(1)" v-if="btns>1" v-html="cbtntxt"></div>' +
    '                           <div :class="[\'abutton del\',{normal:btns<2}]" @click="submit" v-html="mbtntxt"></div>' +
    '                       </slot>' +
    '                   </div>' +
    '               </div>' +
    '           </div>' +
    '       </transition>' +
    '   </div> ',
  delimiters: ['<{', '}>'],
  props: {},
  computed: {},
  data: function () {
    return {
      btns: 2,
      mbtntxt: '确定',
      cbtntxt: '取消',
      mbtncss: 'normal',
      top_title: '友情提示',
      title: '是否确认删除?',
      isshow: false,
      msg: 'hello world!',
      resolve: null, // 确定没有关闭
      reject: null, // 取消状态
      promise: null // 对象
    }
  },
  methods: {
    close_panel: function () {
      this.isshow = false
    //   this.$el.parentNode.removeChild(this.$el)
    },
    submit: function () {
      this.resolve('submit')
    },
    close: function (type) {
      this.isshow = false
      this.reject(type)
    },
    confirm: function (resolve, reject) {
      this.show = true
      // this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
      // });
      // return this.promise;
    }
  },
  watch: {
    isshow: function (val, oldVal) {
      if (val === true) {
        this.$store.dispatch('addTotalPops', 1)
        // console.log('=', this.$store.state.totalPopdiv)
      } else {
        this.$store.dispatch('decTotalPops', 1)
        // console.log('=', this.$store.state.totalPopdiv)
      }
    }
  },
  mounted: function () {},
  beforeDestroy: function () {},
  created: function () {}
})

const MyMsgDialog = function (msgnew, vh, callback) {
  let dialogstance = new Dialogpub().$mount()
  document.body.appendChild(dialogstance.$el)
  return dialogstance
}

const endDialog = MyMsgDialog()
export default {
  endDialog
}
</script>
