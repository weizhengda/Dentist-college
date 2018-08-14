<template>
    <div class="fFrame">
        <!-- <div class="f_header"></div>
        <div class="main">
            <div class="mainLeft">      
                <div class="mlItem1"><router-link to="/home">首页</router-link></div>
                <div class="mlItem2"><router-link to="/Patient">患者</router-link></div>
                <div class="mlItem3"><router-link to="/Finance">财务</router-link></div>
                <div class="mlItem3"><router-link to="/Bihome">运营</router-link></div>
                <div class="mlItem3"><router-link to="/Setting">系统</router-link></div>
                <div class="mlItem3"><router-link to="/Schedule">预约</router-link></div>
                <div class="mlItem4" id="js_more_project"><a>更多</a></div> 
            </div>
            <div class="mainRight"> -->
              <router-view></router-view>
            <!-- </div>
                    </div> -->
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script> 

