<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col class="center" cols="12">
          <v-img src="@/assets/logo.png" elevation-20 class="logo-form"></v-img>
        </v-col>
        <v-col class="center" cols="10">
          <v-text-field type="text" label="Nome Completo"></v-text-field>
        </v-col>
        <v-col class="center" cols="10">
          <v-text-field type="email" label="Email"></v-text-field>
        </v-col>
        <v-col class="center" cols="10">
          <v-text-field type="password" label="Senha"></v-text-field>
        </v-col>
        <v-col class="center" cols="10">
          <v-text-field type="password" label="Confirmar Senha"></v-text-field>
        </v-col>
        <v-col class="center" cols="10">
          <v-checkbox class="checkbox-form" label="Li e aceito os termos de uso."></v-checkbox>
        </v-col>
        <v-col class="center" cols="10">
          <v-btn color="primary" style="display: flex; margin: auto;">Concluir Registro</v-btn>
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
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.center {
  margin: auto;
}
</style>
