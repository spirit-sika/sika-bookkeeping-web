<script setup lang="ts">
import {ElMessage, ElButton} from "element-plus";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/UserStore";
import {logoutAPI} from "@/api/LoginAPI";
import {onMounted} from "vue";


const router = useRouter();
const userStore = useUserStore();
const userInfo = userStore.getUserVO()


async function handleLogout () {
  const data = await logoutAPI()
  userStore.reset();
  router.push('/login')
      .then(()=>{
        ElMessage({
          type: 'success',
          message: data.message,
        })
      })
}


onMounted(() => {
  /**
   * 检查是否有登录数据
   */
  if(userStore.notLogin()) {
    ElMessage({
      type: 'warning',
      message: '您还未登录'
    })
    router.push('/login');
  }
})
</script>

<template>
  <div class="nav-bar-container">
    <div class="hotel-logo">
      <img src="../../assets/big-logo.png" alt="" id="logo-img">
      <div class="logo-font">Sika记账</div>
    </div>

    <div class="user-info-box">
      <div class="user-info-box">
        <div class="user-name">{{ userInfo.nickname }}</div>
      </div>
      <div class="logout-box">
        <el-button round type="warning" size="large" @click="handleLogout">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#logo-img {
  width: 50px;
  padding-left: 30px;
}

.nav-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #FFD04B;
}

.hotel-logo {
  display: flex;
  align-items: center;

  .logo-font {
    margin-left: 15px;
    font-size: 30px;
  }
}

.user-info-box {
  display: flex;
  padding-right: 50px;

  .user-info-box {
    display: flex;
    margin-right: 30px;
    line-height: 40px;
    font-size: 18px;

    .user-role {
      margin-right: 5px;
      color: cornflowerblue;
    }
  }
}
</style>
