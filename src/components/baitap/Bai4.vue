<template>
    <v-menu
      activator="parent"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Quản trị viên
        </v-btn>
      </template>
  
      <v-list>
        <v-list-item>
          <v-list-item-title>Thông tin cá nhân</v-list-item-title>
        </v-list-item>
  
        <v-list-item>
          <v-list-item-title>Đổi mật khẩu</v-list-item-title>
        </v-list-item>
  
        <v-list-item>
          <v-list-item-title>Đăng xuất</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .v-btn {
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .v-list-item-title {
    font-size: 16px;
  }
  </style>
  