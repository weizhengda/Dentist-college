<template>
  <div class="pub_outer">
       	<p>bi营业分析</p>
       	<el-button @click='test'>默认按钮</el-button>
	<el-button type="primary" @click='btn_df'>主要按钮</el-button>
	<el-button type="text" @click='txt'>文字按钮</el-button>
	<el-button type="primary" @click='btn_ok'>提交</el-button>
	<hr/>
	<el-checkbox v-model="checked" disabled>备选项</el-checkbox>
	<hr/>
	<el-checkbox-group v-model="checkList">
	    <el-checkbox label="复选框 A"></el-checkbox>
	    <el-checkbox label="复选框 B"></el-checkbox>
	    <el-checkbox label="复选框 C"></el-checkbox>
	    <el-checkbox label="禁用" disabled></el-checkbox>
	    <el-checkbox label="选中且禁用" disabled></el-checkbox>
	 </el-checkbox-group>
	 <hr/>
	 <div>
	 	<el-input v-model="userName" placeholder="请输入用户名" style='width:100px'></el-input><br/>
	 	<el-input v-model="passWord" placeholder="请输入密码"  style='width:100px' icon="search" :on-icon-click="handleIconClick"></el-input>
	 </div>
	 <hr/>
	 <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input><!--普通多行文本-->
	 <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea"></el-input><!--自动高度适应内容-->
	 <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea"></el-input><!--参数化高度控制-->
	 <hr/>
	 <!--复合型输入框-->
	 <div>
	   <el-input placeholder="请输入内容" v-model='inpt1'>
		<template slot="prepend">http://</template>
	   </el-input>
	 </div>
	 <div  style="margin-top: 15px;">
	   <el-input placeholder="请输入内容" v-model='inpt1'>
		<template slot="append">com</template>
	   </el-input>
	 </div>
	 <div style="margin-top: 15px;">
	  <el-input placeholder="请输入内容" v-model="input5">
	    <el-select v-model="select" slot="prepend" placeholder="请选择">
	      <el-option label="餐厅名" value="1"></el-option>
	      <el-option label="订单号" value="2"></el-option>
	      <el-option label="用户电话" value="3"></el-option>
	    </el-select>
	    <el-button slot="append" icon="search"></el-button>
	  </el-input>
	</div>
	<hr/>
	 <!--复合型输入框-->
	 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
	 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" :disabled="true"></el-input-number>
	 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" :step="2" :controls="false"></el-input-number>
   </div>
</template>

<script>
export default {
  name: 'Biwork',
  data () {
    return {
      num1: 1,
      checked: true,
      userName: '曾令兵',
      passWord: '111111',
      textarea: '多行文本框',
      checkList: ['复选框 A', '选中且禁用']
    }
  },
  methods: {
    handleChange: function (value) {
      console.log(value)
    },
    handleIconClick: function (ev) {
      console.log(ev)
    },
    btn_ok: function () {
      console.log(this._data, this.$data)
      for (var i in this.$data) {
        console.log(i, this.$data[i])
      }
    },
    test: function () {
      alert('test')
      this.checked = true
    },
    btn_df: function () {
      alert('df')
      this.checked = false
    },
    txt: function () {
      alert('txt')
    }
  }
}
</script> 

<style>
lable{float:left;}
</style>
