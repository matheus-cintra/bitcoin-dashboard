<template>
  <v-form style="margin-top: 75px;">
    <v-fade-transition mode="out-in">
      <v-container v-if="!inRegister" key="login">
        <v-row justify="center" align="center" align-content="center">
          <v-col cols="12" class="d-flex" style="height: 150px">
            <v-img contain src="@/assets/logo.png" elevation-20 class="logo-form"></v-img>
          </v-col>
          <v-col cols="11">
            <v-text-field v-model="userEmail" type="email" label="Email"></v-text-field>
          </v-col>
          <v-col cols="11">
            <v-text-field v-model="userPassword" type="password" label="Senha"></v-text-field>
          </v-col>
          <v-col class="d-flex justify-center" cols="10">
            <v-btn color="primary" @click="doLogin" style="display: flex;">Entrar</v-btn>
          </v-col>
          <v-col cols="11" class="pa-0 text-center">
            <a>
              <p class="caption" @click="inRegister = true">Não possui registro? Faça agora!</p>
            </a>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else key="register">
        <v-row>
          <v-col cols="12">
            <v-img src="@/assets/logo.png" elevation-20 class="logo-form"></v-img>
          </v-col>
          <v-col cols="10">
            <v-text-field v-model="userName" type="name" label="Nome"></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field v-model="userEmail" type="email" label="Email"></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field v-model="userPassword" type="password" label="Senha"></v-text-field>
          </v-col>
          <v-col class="d-flex justify-center" cols="10">
            <v-btn color="primary" @click="doRegister" style="display: flex;">Registrar</v-btn>
          </v-col>
          <v-col cols="10">
            <v-label @click="inRegister = false">Possui Login? Entre agora!</v-label>
          </v-col>
        </v-row>
      </v-container>
    </v-fade-transition>
  </v-form>
</template>

<script>
import loginController from '../controllers/login.controller';

export default {
  data() {
    return {
      userName: undefined,
      userEmail: undefined,
      userPassword: undefined,
      inRegister: false,
    };
  },
  methods: {
    doLogin() {
      const form = {
        email: this.userEmail,
        password: this.userPassword,
      };
        // eslint-disable-next-line consistent-return
      loginController.doLogin(form, (dt) => {
        this.$cookies.set('token', dt.data.token);
        if (dt.data.auth) {
          this.$router.push({
            name: 'dashboard',
            // eslint-disable-next-line no-underscore-dangle
            params: { user: dt.data.user._id },
          });
          return this.$toasted.show('Seja bem vindo!', {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 5000,
            type: 'success',
            containerClass: 'toast-fix-position',
          });
        }
      });
    },
    doRegister() {
      const form = {
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword,
      };
        // eslint-disable-next-line consistent-return
      loginController.doLogin(form, (dt) => {
        console.log('dt... ', dt);
        if (dt.data.success) {
          return this.$toasted.show('Usuário criado com sucesso.', {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 5000,
            type: 'success',
            containerClass: 'toast-fix-position',
          });
        }

        return this.$toasted.show(dt.data.message, {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: 5000,
          type: 'error',
          containerClass: 'toast-fix-position',
        });
      });
    },
  },
  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    const _token = this.$cookies.get('token');
    if (!_token) return;
    loginController.validateJWT(_token, (data) => {
      if (data) this.$router.push('/dashboard');
    });
  },
};
</script>

<style>
  .logo-form {
    width: 100px;
  }

  .toast-fix-position {
    margin-top: -75px;
    margin-right: -75px;
  }
</style>
