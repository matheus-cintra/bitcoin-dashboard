<template>
  <v-container>
    <v-row dense justify="center" justify-sm="center" justify-md="start">
      <Cryptos v-for="crypto in cryptos" :key="crypto.fullName" :crypto="crypto" />
    </v-row>
  </v-container>
</template>

<script>
import btcController from '../controllers/btc.controller';
import Cryptos from '@/components/Cryptos.vue';

export default {
  components: {
    Cryptos,
    // Navigation,
  },
  data() {
    return {
      dialog: false,
      cryptos: [],
      page: 1,
      user: {
        name: '',
        email: '',
      },
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Settings', icon: 'mdi-settings' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
    };
  },
  methods: {
    getCrypto() {
      // eslint-disable-next-line
        let result;
      btcController.getCrypto1((data) => {
        data.data.data.map(s => this.cryptos.push({
          ticker: s.symbol,
          fullName: s.name,
          lastPrice: s.quote.BRL.price,
          history: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
          errorImage: false,
        }));
        this.cryptos.sort((a, b) => {
          if (a.lastPrice < b.lastPrice) {
            return 1;
          }

          if (a.lastPrice > b.lastPrice) {
            return -1;
          }

          return 0;
        });
      });
    },
    postCrypto() {
      // eslint-disable-next-line no-plusplus
      btcController.postCrypto(this.cryptos, (err, data) => [
        console.log('DATA >>>> ', err, data),
      ]);
    },
  },
  // eslint-disable-next-line consistent-return
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const { _id } = this.$route.params;

    // eslint-disable-next-line no-underscore-dangle
    const _token = this.$cookies.get('token');
    if (!_token) return this.$router.push('/');
    // eslint-disable-next-line consistent-return
    btcController.validateJWT(_token, (data) => {
      if (data) return this.getCrypto();
    });
  },
};
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.8;
    position: absolute;
    width: 100%;
  }
</style>
