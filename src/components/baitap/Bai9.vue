<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Basic Layout</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" placeholder="John Deo"></v-text-field>
                <v-text-field label="Company" placeholder="ACME Inc."></v-text-field>
                <v-text-field label="Email" placeholder="john.deo"></v-text-field>
                <v-text-field label="Phone No" placeholder="412 2150 451"></v-text-field>
                <v-textarea label="Message" placeholder="Hi, Do you have a moment to talk Jeo?"></v-textarea>
                <v-btn color="primary">Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Basic with Icons</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" placeholder="John Deo" prepend-icon="mdi-account"></v-text-field>
                <v-text-field label="Company" placeholder="ACME Inc." prepend-icon="mdi-office-building"></v-text-field>
                <v-text-field label="Email" placeholder="john.deo" prepend-icon="mdi-email"></v-text-field>
                <v-text-field label="Phone No" placeholder="412 2150 451" prepend-icon="mdi-phone"></v-text-field>
                <v-textarea label="Message" placeholder="Hi, Do you have a moment to talk Jeo?" prepend-icon="mdi-message"></v-textarea>
                <v-btn color="primary">Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  