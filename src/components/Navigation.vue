<template>
  <div>
    <v-navigation-drawer app v-model="drawer" color="primary" dark>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar width="55px" height="55px">
            <img src="@/assets/user-profile.svg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="help">
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="doLogout">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import loginController from '../controllers/login.controller';

export default {
  props: ['user'],
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    doLogout() {
      console.log('entrou aqui...');
      loginController.doLogout((data) => {
        console.log('data > ', data);
        if (data.data.success) {
          // eslint-disable-next-line no-underscore-dangle
          this.$cookies.remove('token');
          console.log(this.$cookies.keys());
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style>
</style>
