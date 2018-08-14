<template>
  <div class="pub_outer">
        <div class="pub_frme_two">
            <div class="pub_frmeLeft">
                <div class="un_fold">
                  <ul>
                      <li><router-link to="/Bihome/today">今日工作</router-link></li>
                      <li><router-link to="/Bihome/case">就诊分析</router-link></li>
                      <li><router-link to="/Bihome/ordered">预约分析</router-link></li>
                      <li><router-link to="/Bihome/power">电网分析</router-link></li>
                      <li><router-link to="/Bihome/market">市场分析</router-link></li>
                      <li><router-link to="/Bihome/advice">咨询分析</router-link></li>
                      <li><router-link to="/Bihome/practice">诊疗分析</router-link></li>
                      <li><router-link to="/Bihome/work" >营业分析</router-link></li>
                      <li><router-link to="/Bihome/payOutTotal">支出分析</router-link></li>
                      <li><router-link to="/Bihome/visit">回访分析</router-link></li>
                      <li><router-link to="/Bihome/chainguid">连锁分析</router-link></li>
                  </ul>
                </div>
            </div>
            <div class="pub_frmeRight">
              <router-view></router-view>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: 'Bihome'
}
</script> 
