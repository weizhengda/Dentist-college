exports.install = function (Vue, options) {
  /**
   * 模拟js alert函数
   * @param {*} msg 对话框主文本
   * @param {*} mainback 主按钮回调
   */
  Vue.prototype.open_alert = function (msg, mainback) {
    var tmp = this.DIALOG.endDialog
    tmp.title = msg
    tmp.btns = 1
    tmp.isshow = true
    tmp.confirm(function () {
      mainback()
      tmp.isshow = false
    }, function () {})
  }
  /**
   * 删除提醒对话框
   * @param {*} msg 对话框主文本
   * @param {*} btns 按钮数
   * @param {*} cancelback 取消按钮回调
   * @param {*} mainback 主按钮回调
   */
  Vue.open_delask = function (msg, btns, cancelback, mainback) {
    var tmp = this.DIALOG.endDialog
    tmp.title = msg
    tmp.btns = 2
    tmp.mbtntxt = '删除'
    tmp.isshow = true
    tmp.confirm(
      function () {
        tmp.isshow = false
        mainback()
      },
      function () {
        if (typeof (cancelback) === 'function') {
          cancelback()
        }
      })
  }
  /**
 * 打开有提醒对话框 是否+另一按钮 模拟js confirm函数
 * @param {*} msg 对话框主文本
 * @param {*} btns 按钮数
 * @param {*} cancelback 取消按钮回调
 * @param {*} mainback 主按钮回调
 */
  Vue.open_askyn = function (msg, btns, cancelback, mainback) {
    var tmp = this.DIALOG.endDialog
    tmp.title = msg
    tmp.btns = 2
    tmp.mbtntxt = '是'
    tmp.cbtntxt = '否'
    tmp.isshow = true
    tmp.confirm(
      function () {
        tmp.isshow = false
        mainback()
      },
      function () {
        if (typeof (cancelback) === 'function') {
          cancelback()
        }
      })
  }
  /**
 * 打开有提醒对话框 取消+另一按钮 模拟js confirm函数
 * @param {*} msg 对话框主文本
 * @param {*} btns 按钮数
 * @param {*} cancelback 取消按钮回调
 * @param {*} mainback 主按钮回调
 */
  Vue.open_confirm = function (msg, btns, cancelback, mainback) {
    var tmp = this.DIALOG.endDialog
    tmp.title = msg
    tmp.btns = 2
    tmp.mbtntxt = '确定'
    tmp.isshow = true
    tmp.confirm(
      function () {
        tmp.isshow = false
        mainback()
      },
      function () {
        if (typeof (cancelback) === 'function') {
          cancelback()
        }
      })
  }
}
