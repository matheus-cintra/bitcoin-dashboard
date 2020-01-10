<template>
  <v-container>
    <v-card elevation="6" class="mx-auto">
      <v-card-title>BTC - Bitcoin</v-card-title>
      <v-card-subtitle>Última cotação: USD11.350</v-card-subtitle>
      <v-divider style="width: 300px"></v-divider>
      <v-sparkline
        :value="[0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0]"
        :line-width="1"
        :smooth="0"
      ></v-sparkline>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
