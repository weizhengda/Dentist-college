<template>
  <div class="case_main"> <span>模拟病历视图dom生成</span>
    <div id="caseHistory">
      <table id="caseTable" border='0' width="100%" cellpadding="0" cellspacing="1" data-edit="0" data-focus="" data-popmenu="" data-selText=''>
        <tr id="PC">
          <td valign="top" class="hint">主    述</td>
          <td colspan="3" ref="PC_txt" valign="middle" class='content' @focus="setFocus('#PC')"   @input="myPaste()"   @contextmenu="openPopMenu(this)" v-html="jsobj.dbRecords.PC"></td>
        </tr>
        <tr id="HPI">
          <td valign="top" class="hint">现 病 史</td>
          <td colspan="3" ref="HPI_txt"  valign="middle" class='content' @focus="setFocus('#HPI')" @input="myPaste()"   @contextmenu="openPopMenu(this)" v-html="jsobj.dbRecords.HPI"></td>
        </tr>
        <tr id="PI">
          <td valign="top" class="hint">既 往 史</td>
          <td colspan="3" ref="PI_txt" valign="middle" class='content' @focus="setFocus('#PI')" @input="myPaste()"   @contextmenu="openPopMenu(this)" v-html="jsobj.dbRecords.PI"></td>
        </tr>
        <tr id="GM">
          <td valign="middle" class="hint">过 敏 史</td>
          <td colspan="3" ref="GM_txt" valign="middle"  style="color:#FE8039" class='content' @focus="setFocus('#GM')" @input="myPaste()"   @contextmenu="openPopMenu(this)" v-html="jsobj.dbRecords.GM"></td>
        </tr>
        
        <tr  v-bind:id="'EXAM'+index"   v-for="(item,index) in jsobj.dbRecords.EXAM.item">
          <td valign="top" class="hint" v-if="index===0">检    查</td>
          <td valign="top" class="hint" v-else></td>
          <td class="tdYaWei tPt" id="EXAM_yw" @click="selectYaWei('EXAM_yw')" >
          	<div class='LT'><input type="text" v-model="item.LT"  readonly="readonly"/></div>
            <div class='RT'><input type="text" v-model="item.RT"  readonly="readonly"/></div>
            <div class='LB'><input type="text" v-model="item.LB"  readonly="readonly"/></div>
            <div class='RB'><input type="text" v-model="item.RB"  readonly="readonly"/></div>
          </td>
          <td class='content' @input="myPaste(index)" @focus="setFocus('#EXAM')"    @contextmenu="openPopMenu(this)" v-html="item.Text" ref="EXAM_txt"></td>
          <td class='tool'  title="插入牙位"  @click="insertYaWei($event)" v-if="index===0"></td>
          <td class='toolDel' title="删除牙位" @click="delYaWei(index)" v-else></td>
          </td>
        </tr>
        
        <tr v-bind:id="'AE_'+index" v-for="(item,index) in jsobj.dbRecords.AE.item">
          <td valign="top" class="hint" v-if="index===0">辅助检查</td>
          <td valign="top" class="hint" v-else></td>
          <td class="tdYaWei tPt" id='AW_yw' @click="selectYaWei('AE_yw')" >
           <div class='LT'><input type="text" v-model="item.LT" readonly="readonly" /></div>
            <div class='RT'><input type="text" v-model="item.RT"  readonly="readonly"/></div>
            <div class='LB'><input type="text" v-model="item.LB"  readonly="readonly"/></div>
            <div class='RB'><input type="text" v-model="item.RB"  readonly="readonly"/></div>
          </td>
          <td class='content' @input="myPaste(index)" @focus="setFocus('#AE')"    @contextmenu="openPopMenu(this)" v-html="item.Text"  ref="AE_txt"></td>
          <td class='tool'  title="插入牙位"  @click="insertYaWei($event)" v-if="index===0"></td>
          <td class='toolDel' title="删除牙位" @click="delYaWei(index)" v-else></td>
        </tr>       
        
        <tr v-bind:id="'DG_'+index"  v-for="(item,index) in jsobj.dbRecords.DG.item">
          <td valign="top" class="hint" v-if="index===0">诊    断</td>
          <td valign="top" class="hint" v-else></td>
          <td class="tdYaWei tPt" id="DG_yw" @click="selectYaWei('DG_yw')" >
            <div class='LT'><input type="text" v-model="item.LT"  readonly="readonly"/></div>
            <div class='RT'><input type="text" v-model="item.RT"  readonly="readonly"/></div>
            <div class='LB'><input type="text" v-model="item.LB"  readonly="readonly"/></div>
            <div class='RB'><input type="text" v-model="item.RB"  readonly="readonly"/></div>
          </td>
          <td class='content' @input="myPaste(index)" @focus="setFocus('#DG')"    @contextmenu="openPopMenu(this)" v-html="item.Text"  ref="DG_txt"></td>
          <td class='tool'  title="插入牙位"  @click="insertYaWei($event)" v-if="index===0"></td>
          <td class='toolDel' title="删除牙位" @click="delYaWei(index)" v-else></td>
        </tr>        
                
        <tr  v-bind:id="'Plan_'+index"  v-for="(item,index) in jsobj.dbRecords.Plan.item">
          <td valign="top" class="hint" v-if="index===0">治疗方案</td>
          <td valign="top" class="hint" v-else></td>
          <td class="tdYaWei tPt" id="Plan_yw" @click="selectYaWei('Plan_yw')" >
            <div class='LT'><input type="text" v-model="item.LT"  readonly="readonly"/></div>
            <div class='RT'><input type="text" v-model="item.RT" readonly="readonly" /></div>
            <div class='LB'><input type="text" v-model="item.LB"  readonly="readonly"/></div>
            <div class='RB'><input type="text" v-model="item.RB"  readonly="readonly"/></div>
            </td>
          <td class='content' @input="myPaste(index)" @focus="setFocus('#Plan')"    @contextmenu="openPopMenu(this)" v-html="item.Text"  ref="Plan_txt"></td>
          <td class='tool'  title="插入牙位"  @click="insertYaWei($event)" v-if="index===0"></td>
          <td class='toolDel' title="删除牙位" @click="delYaWei(index)" v-else></td>
        </tr>
               
        <tr v-bind:id="'TR_'+index"  v-for="(item,index) in jsobj.dbRecords.TR.item">
          <td valign="top" class="hint" v-if="index===0">治    疗</td>
          <td valign="top" class="hint" v-else></td>
          <td class="tdYaWei tPt" id="TR_yw" @click="selectYaWei('TR_yw')" >
          	<div class='LT'><input type="text" v-model="item.LT"  readonly="readonly"/></div>
            <div class='RT'><input type="text" v-model="item.RT"  readonly="readonly"/></div>
            <div class='LB'><input type="text" v-model="item.LB"  readonly="readonly"/></div>
            <div class='RB'><input type="text" v-model="item.RB"  readonly="readonly"/></div>
            </td>
          <td class='content' @input="myPaste(index)" @focus="setFocus('#TR')"    @contextmenu="openPopMenu(this)"  v-html="item.Text"  ref="TR_txt"></td>
          <td class='tool'  title="插入牙位"  @click="insertYaWei($event)" v-if="index===0"></td>
          <td class='toolDel' title="删除牙位" @click="delYaWei(index)" v-else></td>
        </tr>        
               
        <tr id="DA">
          <td valign="top" class="hint">医    嘱</td>
          <td colspan="3" ref="DA_txt" valign="middle" class='content' @focus="setFocus('#DA')" @input="myPaste()" readonly="readonly"   @contextmenu="openPopMenu(this)"  v-html="jsobj.dbRecords.DA"></td>
        </tr>
      </table>
    </div>
    <input type="button" value="保存" @click="save_data">
  </div>
</template>
<script>
  export default {
    name: 'Bicase',
    data () {
      return {
        test: 'abc',
        jsobj: JSON.parse('{"dbRecords":{"DA":"常规医嘱","AE":{"item":[{"LT":"243","Text":"牙槽骨吸收至根尖1/3处"},{"LB":"431","Text":"牙槽骨吸收至根尖"},{"RB":"431","Text":"测试测试"}]},"PC":"下前牙外伤后松动","HPI":"下前牙咬到硬物后松动，求诊。","DG":{"item":[{"LT":"543","Text":"慢性牙周炎"},{"RT":"54","Text":"慢性牙周炎test"}]},"PI":"否认全身系统性疾病及传染病和药物过敏史。","EXAM":{"item":[{"LT":"543","Text":"全口卫生情况：一般，龈上牙石覆盖牙面不超过1/3，可探及附着丧失，可探及袋内牙石，牙龈红肿，牙龈呈暗 红色，附着龈点彩消失，31.41Ⅲ松动，叩（+）"},{"RT":"43","Text":"慢性牙周炎testtest"}]},"GM":"砖木厅在厅一","Plan":{"item":[{"LT":"543","Text":"全口牙周治疗后视情况而定"},{"RT":"3","Text":"慢性牙周炎dsafsdafdsa"},{"LB":"43","Text":"慢性牙周炎bbbbb"}]},"TR":{"item":[{"LT":"543","Text":"全口牙周治疗"},{"LB":"53","Text":"慢性牙周炎dsafdsf"}]}}}')
      }
    // },
    // computed: {
    //   jsobj: function () {
    //     return JSON.parse('{"dbRecords":{"DA":"常规医嘱","AE":{"item":[{"LT":"243","Text":"牙槽骨吸收至根尖1/3处"},{"LB":"431","Text":"牙槽骨吸收至根尖"},{"RB":"431","Text":"测试测试"}]},"PC":"下前牙外伤后松动","HPI":"下前牙咬到硬物后松动，求诊。","DG":{"item":[{"LT":"543","Text":"慢性牙周炎"},{"RT":"54","Text":"慢性牙周炎test"}]},"PI":"否认全身系统性疾病及传染病和药物过敏史。","EXAM":{"item":[{"LT":"543","Text":"全口卫生情况：一般，龈上牙石覆盖牙面不超过1/3，可探及附着丧失，可探及袋内牙石，牙龈红肿，牙龈呈暗 红色，附着龈点彩消失，31.41Ⅲ松动，叩（+）"},{"RT":"43","Text":"慢性牙周炎testtest"}]},"GM":"砖木厅在厅一","Plan":{"item":[{"LT":"543","Text":"全口牙周治疗后视情况而定"},{"RT":"3","Text":"慢性牙周炎dsafsdafdsa"},{"LB":"43","Text":"慢性牙周炎bbbbb"}]},"TR":{"item":[{"LT":"543","Text":"全口牙周治疗"},{"LB":"53","Text":"慢性牙周炎dsafdsf"}]}}}')
    //   }
    },
    methods: {
      myPaste: function (param) {
        // let multiRows = ['EXAM', 'AE', 'DG', 'Plan', 'TR']
        // let _id = event.target.parentNode.id
        // let _pclass = _id.split('_')[0]
        // let _inx = multiRows.indexOf(_pclass)
        // console.log(event.target)
        // if (_inx > -1) {
        //   let _refid = _pclass + '_txt_' + param
        //   this.jsobj.dbRecords[_pclass].item[param].Text = this.$refs[_refid][0].innerHTML
        // }
      },
      setFocus: function (param) {
        // console.log('fsetFocus', param)
        return false
      },
      openPopMenu: function (param) {
        console.log('openPopMenu')
        return false
      },
      selectYaWei: function (param) {
        console.log('选择牙位')
      },
      delYaWei: function (index) {
        // console.log(event)
        // console.log(index)
        // console.log(event.target.parentNode.id)
        let _id = event.target.parentNode.id.split('_')[0]
        // console.log(_id)
        let delars = this.jsobj.dbRecords[_id].item
        // console.log(delars)
        delars.splice(index, 1)
        // console.log(this.jsobj.dbRecords[_id])
      },
      insertYaWei: function () {
        // console.log('插入牙位')
        // console.log(event)
        let _id = event.target.parentNode.id.split('_')[0]
        let addars = this.jsobj.dbRecords[_id].item
        // console.log(addars)
        addars.push({'LT': '', 'Text': ''})
      },
      save_data: function () {
        this.jsobj.dbRecords.PC = this.$refs['PC_txt'].innerHTML
        this.jsobj.dbRecords.HPI = this.$refs['HPI_txt'].innerHTML
        this.jsobj.dbRecords.PI = this.$refs['PI_txt'].innerHTML
        this.jsobj.dbRecords.GM = this.$refs['GM_txt'].innerHTML
        this.jsobj.dbRecords.DA = this.$refs['DA_txt'].innerHTML
        let _self = this
        let multiRows = ['EXAM', 'AE', 'DG', 'Plan', 'TR']
        for (let i = 0; i < 5; i++) {
          let _key = multiRows[i]
          let _keytxt = _key + '_txt'
          this.$refs[_keytxt].forEach(function (value, index) {
            _self.jsobj.dbRecords[_key].item[index].Text = value.innerText
          })
        }
        console.log(JSON.stringify(this.jsobj), this.$refs['AE_txt'].length)
      }
    }
}
</script>
<style>
	
</style>
