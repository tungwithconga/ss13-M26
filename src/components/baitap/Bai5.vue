<template>
    <v-alert type="info" elevation="1" dense>
      <v-row align="center">
        <v-col>
          <strong>Xác nhận</strong><br />
          Bạn có chắc chắn muốn xoá tài khoản này không?
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn icon @click="closeAlert">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  </script>
  
  <style scoped>
  .v-alert {
    background-color: #f5f5f5;
    color: #000;
  }
  </style>
  