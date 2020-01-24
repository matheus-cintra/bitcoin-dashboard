<template>
  <v-app>
    <Navigation :user="user" />
    <Header />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import btcController from '@/controllers/btc.controller';
import accountController from '@/controllers/account.controller';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Header,
  },

  data: () => ({
    user: {
      name: undefined,
      email: undefined,
    },
  }),
  // eslint-disable-next-line consistent-return
  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    const _token = this.$cookies.get('token');
    if (!_token) return this.$router.push('/');
    // eslint-disable-next-line consistent-return
    btcController.validateJWT(_token, (data) => {
      if (data) {
        accountController.getUser(data.data.userId, (result) => {
          console.log('result > ', result);
          this.user = {
            name: result.data.user.name,
            email: result.data.user.email,
          };
        });
      }
    });
  },
};
</script>
