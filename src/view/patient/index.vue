<template>
  <div>	 
     <p><router-link to="/Patient/casehistoryeditor">病历</router-link></p>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Patient'
}
</script> 
