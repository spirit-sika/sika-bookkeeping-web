<script setup lang="ts">
import {useLoginHook} from "@/hooks/LoginHook";

const loginHook = useLoginHook();
const {loginDTO, captchaVO, handleLogin, getCaptcha} = loginHook

</script>

<template>
  <div class="login-page">
    <div class="shell">

      <div id="img-box">
        <img src="../assets/login-img.jpeg" alt="">
      </div>

      <form method="post" @submit.prevent>
        <div id="form-body">
          <div id="welcome-lines">
            <div id="w-line-1">HI,Sika</div>
            <div id="w-line-2">Welcome Back</div>
          </div>

          <div id="input-area">
            <div class="f-inp">
              <input type="text" placeholder="Customer Login Name" v-model="loginDTO.phone">
            </div>
            <div class="f-inp">
              <input type="password" placeholder="Customer Password" v-model="loginDTO.password">
            </div>
            <div class="captcha-area">
              <div class="captcha-input-wrapper">
                <input type="text" placeholder="please input code" v-model="loginDTO.code">
              </div>
              <img class="captcha-img" :src="captchaVO.base64" alt="" @click="getCaptcha">
            </div>
            <div id="persistence">
              <input id="rememberMe" type="checkbox" v-model="loginDTO.rememberMe">
              <label for="rememberMe">Remember Me</label>
            </div>
          </div>

          <div id="submit-button-cvr">
            <button id="submit-button" @click="handleLogin">LOGIN</button>
          </div>

          <div id="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  background: linear-gradient(45deg, #FBDA61, #FF5ACD);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.shell {
  display: flex;
  justify-content: center;

  #img-box {
    width: 430px;
    height: 520px;

    img {
      height: 100%;
    }
  }
}

form {
  width: 562px;
  height: 520px;
  background-color: #fff;
  box-shadow: 0 15px 40px #B6354E;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  #form-body {
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #welcome-lines {
      width: 100%;
      text-align: center;
      line-height: 1;

      #w-line-1 {
        color: #7F7F7F;
        font-size: 50px;
      }

      #w-line-2 {
        color: #9C9C9C;
        font-size: 30px;
        margin-top: 17px;
      }
    }

    .captcha-area {
      display: flex;
      justify-content: space-between;
      height: 52px;

      .captcha-input-wrapper {
        input {
          font-size: 20px;
          width: 156px;
          padding: 13px 25px;
          border: 2px solid #6E6D6D;
          border-radius: 20px;
          margin-right: 10px;
        }
      }
    }

    #persistence {
      margin-top: 10px;
      color: #868686;
      font-size: 15px;
    }

    #input-area {
      width: 100%;
      margin-top: 40px;

      .f-inp {
        padding: 13px 25px;
        border: 2px solid #6E6D6D;
        line-height: 1;
        border-radius: 20px;
        margin-bottom: 15px;

        input {
          width: 100%;
          font-size: 20px;
          padding: 0;
          margin: 0;
          border: 0
        }

        input:focus-visible {
          outline: none;
        }

        input::placeholder {
          color: #B9B9B9;
        }
      }
    }

    #submit-button-cvr {
      margin-top: 20px;

      #submit-button {
        display: block;
        width: 100%;
        color: #FFFFFF;
        font-size: 14px;
        margin: 0;
        padding: 14px 40px;
        border: 0;
        background-color: #F5506E;
        border-radius: 25px;
        line-height: 1;
        cursor: pointer;
      }
    }

    #forgot-pass {
      text-align: center;
      margin-top: 10px;

      a {
        color: #868686;
        font-size: 12px;
        text-decoration: none;
      }
    }
  }
}
</style>
