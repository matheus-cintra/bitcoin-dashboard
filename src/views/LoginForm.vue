<template>
  <v-row class="d-flex justify-space-between" no-gutters>
    <v-col cols="12" md="9" lg="9" class="d-none d-sm-none d-md-inline">
      <v-img :src="require('@/assets/logo.png')" position="top" elevation-20 class="logotipo"></v-img>
      <v-img class="imagem" :src="require('@/assets/login.jpg')"></v-img>
      <h3 class="title">Bitcoin Dashboard</h3>
    </v-col>
    <v-col cols="12" md="3" lg="3" class="login-form elevation-24">
      <Login />
    </v-col>
  </v-row>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    Login,
  },
};
</script>

<style scoped>
  .login-form {
    z-index: 4;
  }

  .title {
    position: absolute;
    margin-left: 45px;
    margin-top: 15px;
    font-size: 24;
    font-weight: 500;
  }

  .checkbox-form {
    margin-top: -20px;
  }

  .center {
    margin: auto;
  }

  .imagem {
    z-index: 0;
    position: absolute;
    top: 0;
    width: 75%;
    height: 100vh;
  }

  .elevation {
    -webkit-box-shadow: -2px 0px 43px 0px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: -2px 0px 43px 0px rgba(0, 0, 0, 0.6);
    box-shadow: -2px 0px 43px 0px rgba(0, 0, 0, 0.6);
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .logotipo {
    width: 100px;
    height: 100px;
    margin-left: 75px;
    margin-top: 75px;
    -webkit-box-shadow: 0px 16px 24px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 16px 24px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 16px 24px -9px rgba(0, 0, 0, 0.75);
    background-color: #808080;
    border-radius: 10%;
    z-index: 1;
  }

  .inner-image {
    position: absolute;
    top: 15px;
    right: 30px;
  }

  .image-fit {
    height: 100vh;
  }
</style>
