<template>
  <div>
    <Navigation :user="user" />
    <v-container style="max-width: 1900px">
      <h1 style="text-align: center">SETTINGS</h1>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import btcController from '@/controllers/btc.controller';
import accountController from '@/controllers/account.controller';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      user: {
        name: undefined,
        email: undefined,
      },
    };
  },
  // eslint-disable-next-line consistent-return
  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    const _token = this.$cookies.get('token');
    if (!_token) return this.$router.push('/');
    // eslint-disable-next-line consistent-return
    btcController.validateJWT(_token, (data) => {
      if (data) {
        console.log('data >>> ', data);
        accountController.getUser(data.data.userId, (result) => {
          console.log('result >>> ', result);
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

<style>
</style>
