<template>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab>Trang chủ</v-tab>
        <v-tab>Giới thiệu</v-tab>
        <v-tab>Liên hệ</v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>Trang chủ</v-card-text>
          </v-card>
        </v-tab-item>
  
        <v-tab-item>
          <v-card flat>
            <v-card-text>Giới thiệu</v-card-text>
          </v-card>
        </v-tab-item>
  
        <v-tab-item>
          <v-card flat>
            <v-card-text>Liên hệ</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tab = ref(0);
  </script>
  
  <style scoped>
  .v-tab {
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .v-tabs {
    background-color: #1976d2;
    color: white;
  }
  
  .v-tab--active {
    background-color: white;
    color: #1976d2;
  }
  </style>
  