<template>
    <v-container>
      <v-pagination
        v-model="page"
        length="4"
        total-visible="4"
        class="my-4"
      ></v-pagination>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const page = ref(1); 
  </script>
  
  <style scoped>
  .v-pagination__item {
    font-size: 20px;
  }
  
  .v-pagination__item--active {
    background-color: #e0e0e0;
    border-radius: 50%;
  }
  </style>
  