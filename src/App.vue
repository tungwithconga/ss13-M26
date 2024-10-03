<template>
  <div>
    <!-- <v-btn @click="handleClick">Click me</v-btn>

    <v-combobox
      v-model="city"
      label="Combobox"
      :items="['Hà Nội', 'Đà Nẵng', 'Hà Tây', 'Thanh Hóa', 'Nghệ An', 'Vinh']"
    ></v-combobox>
    <h3>Thành phố : {{ city }}</h3>

    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet> -->
    <!-- <ListEmployee></ListEmployee> -->
    Bai1:<Bai1></Bai1><br>
    Bai2:<Bai2></Bai2><br>
    Bai3:<Bai3></Bai3><br>
    Bai4:<Bai4></Bai4><br>
    Bai5:<Bai5></Bai5><br>
    Bai6:<Bai6></Bai6><br>
    Bai7:<Bai7></Bai7><br>
    Bai8:<Bai8></Bai8><br>
    Bai9:<Bai9></Bai9><br>
    Bai10:<Bai10></Bai10><br>
    
  </div>
</template>

<script setup>
// import ListEmployee from "./components/ListEmployee.vue";
import Bai1 from "./components/baitap/Bai1.vue";
import Bai2 from "./components/baitap/Bai2.vue";
import Bai3 from "./components/baitap/Bai3.vue";
import Bai4 from "./components/baitap/Bai4.vue";
import Bai5 from "./components/baitap/Bai5.vue";
import Bai6 from "./components/baitap/Bai6.vue";
import Bai7 from "./components/baitap/Bai7.vue";
import Bai8 from "./components/baitap/Bai8.vue";
import Bai9 from "./components/baitap/Bai9.vue";
// import { reactive } from "vue";
// import { ref } from "vue";


// const city = ref("");
// const firstName = ref("");
// const rules = reactive([
//   (value) => {
//     if (value) return true;

//     return "Tên ko đc để trống";
//   },
// ]);
// const handleClick = () => {
//   console.log("Clicked");
// };

</script>

<style></style>