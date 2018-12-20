<template>
  <v-app>
    <Navbar></Navbar>
    <Header></Header>
    <v-content class="mx-4 mb-4">
      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
export default {
  name: "App",
  components: {
    Navbar,
    Header
  },
  data() {
    return {
      //
    };
  }
};
</script>
