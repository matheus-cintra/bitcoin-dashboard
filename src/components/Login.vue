<template>
  <v-form>
    <v-container class="d-lex justify-space-between" fluid>
      <v-row>
        <v-col cols="12">
          <v-img src="@/assets/logo.png" elevation-20 class="logo-form"></v-img>
        </v-col>
        <v-col cols="10">
          <v-text-field type="email" label="Email"></v-text-field>
        </v-col>
        <v-col cols="10">
          <v-text-field type="password" label="Senha"></v-text-field>
        </v-col>
        <v-col class="d-flex justify-center" cols="10">
          <v-btn color="primary" style="display: flex;">Entrar</v-btn>
          <v-btn color="danger" style="display: flex;">Registrar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {};
</script>

<style>
.logo-form {
  width: 100px;
}
</style>
