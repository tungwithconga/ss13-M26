<template>
    <v-container>
      <v-btn color="primary" @click="dialog = true">
        Xác nhận
      </v-btn>
  
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>
            <v-icon left>mdi-refresh</v-icon>
            Xác nhận
          </v-card-title>
  
          <v-card-text>
            Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập nhật.
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="confirmAction">
              Xác nhận
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const dialog = ref(false);
  
  const confirmAction = () => {
    dialog.value = false;
  };
  </script>
  
  <style scoped>
  .v-btn {
    font-weight: bold;
    text-transform: uppercase;
  }
  </style>
  