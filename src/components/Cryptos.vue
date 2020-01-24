<template>
  <v-col cols="12" lg="3" md="4" sm="10" class="mb-6">
    <v-hover v-slot:default="{ hover }">
      <v-card min-height="108%" min-width="200px" class="darken-3" elevation="6">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex flex-column transition-fast-in-fast-out red darken-2 v-card--reveal white--text"
            style="height: 50%;"
          >
            <div class="d-block">{{crypto.lastPrice | currency}}</div>
            <div class="d-block">{{crypto.lastPrice | currency}}</div>
            <div class="d-block">{{crypto.lastPrice | currency}}</div>
          </div>
        </v-expand-transition>

        <v-card-title style="position: relative;max-width: 214px; white-space: nowrap">
          <v-img
            min-width="32px"
            min-height="32px"
            max-width="32px"
            max-height="32px"
            :src="`/assets/svg/${crypto.ticker.toLowerCase()}.svg`"
            @error="crypto.errorImage=true"
            v-if="crypto.errorImage === false"
          />
          <v-img
            v-if="crypto.errorImage === true"
            min-width="32px"
            min-height="32px"
            max-width="32px"
            max-height="32px"
            :src="'/assets/svg/btc.svg'"
          />
          <span
            style="margin-left: 5px; max-width: 145px;"
            class="d-inline-block text-truncate"
          >{{crypto.fullName}}</span>
        </v-card-title>
        <v-card-subtitle>Última cotação: {{crypto.lastPrice | currency}}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-spacer style="height: 10px;"></v-spacer>
        <v-sparkline :value="crypto.history" :line-width="1" :smooth="0"></v-sparkline>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: ['crypto'],
};
</script>

<style>
</style>
